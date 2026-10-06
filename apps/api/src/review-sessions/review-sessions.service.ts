import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { AiGateway } from 'src/ai/ai.gateway';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto';
import { FeedbackAnalysisInput } from 'src/ai/ai.types';
import tr from 'zod/v4/locales/tr.js';
import { UpdateReviewDraftDto } from './dto/update-review-draft.dto';
@Injectable()
export class ReviewSessionsService {
    constructor(private readonly prisma: PrismaService,
                private readonly aiGateway:AiGateway
    ) {}

    async create(tableToken: string) {
        const table = await this.prisma.table.findUnique({
            where: {
                qrToken: tableToken,
            },
        });

        if (!table) {
            throw new NotFoundException('Invalid table token');
        }

        const session = await this.prisma.reviewSession.create({
            data: {
                tenantId: await this.getTenantId(table.locationId),
                locationId: table.locationId,
                tableId: table.id,
            },
        });

        return {
            sessionId: session.id,
            status: session.status,
        };
    }

    private async getTenantId(locationId: string) {
        const location = await this.prisma.location.findUnique({
            where: {
                id: locationId,
            },
            select: {
                tenantId: true,
            },
        });

        if (!location) {
            throw new NotFoundException('Location not found');
        }

        return location.tenantId;
    }

    async submitFeedback(
        sessionId: string,
        dto: SubmitFeedbackDto,
    ) {
        const session = await this.prisma.reviewSession.findUnique({
            where: {
                id: sessionId,
            },
            select: {
                id: true,
                tenantId: true,
                status: true,
                tenant: {
                    select: {
                        businessType: true,
                    },
                },
            },
        });

        if (!session) {
            throw new NotFoundException(
                'Review session is not found',
            );
        }

        if (session.status !== 'STARTED') {
            throw new BadRequestException(
                'Review session is not accepting feedbacks',
            );
        }

        const keywordsId = dto.keywords.map(
            (keyword) => keyword.keywordId,
        );

        const uniqueKeywordIds = new Set(keywordsId);

        if (uniqueKeywordIds.size !== keywordsId.length) {
            throw new BadRequestException(
                'Duplicate keywords are not allowed',
            );
        }

        const keywords = await this.prisma.keyword.findMany({
            where: {
                id: {
                    in: keywordsId,
                },
                tenantId: session.tenantId,
            },
            select: {
                id: true,
                name: true,
            },
        });

        if (keywords.length !== keywordsId.length) {
            throw new NotFoundException(
                'One or more keywords were not found',
            );
        }

        const aiKeywords: {
            name: string;
            sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
        }[] = dto.keywords.map((feedbackKeyword) => {
            const keyword = keywords.find(
                (k) => k.id === feedbackKeyword.keywordId,
            );

            return {
                name: keyword!.name,
                sentiment:
                    feedbackKeyword.sentiment === 'GOOD'
                        ? 'POSITIVE'
                        : 'NEGATIVE',
            };
        });

        const aiInput: FeedbackAnalysisInput = {
            businessType: session.tenant.businessType,
            language: dto.language ?? 'English',
            rating: dto.rating,
            keywords: aiKeywords,
        };

        await this.prisma.reviewSession.update({
    where: { id: session.id },
    data: {
        rating: dto.rating,
        language: dto.language ?? 'English',
        status: 'PROCESSING',
    },
});


        const aiResult = await this.aiGateway.analyzeFeedback(aiInput);

        const result = await this.prisma.$transaction(
            async (tx) => {
                const feedback = await tx.feedback.create({
                    data: {
                        sessionId: session.id,
                    },
                });

                await tx.feedbackKeyword.createMany({
                    data: dto.keywords.map((keyword) => ({
                        feedbackId: feedback.id,
                        keywordId: keyword.keywordId,
                        sentiment: keyword.sentiment,
                    })),
                });


                const reviewDraft = await tx.reviewDraft.create({
                    data:{
                        sessionId: session.id,
                        rawText: aiResult.generation.content,
                        text:aiResult.analysis.review,
                        status:'READY',
                    },
                });

                const updatedSession =
                    await tx.reviewSession.update({
                        where: {
                            id: session.id,
                        },
                        data: {
                            
                            status: 'DRAFT_READY',
                        },
                    });

                

                return {
                    sessionId: updatedSession.id,
                    status: updatedSession.status,
                    draftId:reviewDraft.id,
                    review: reviewDraft.text
                };
            },
        );

        return result;
    }

   async getSession(sessionId:string){
     const session = await this.prisma.reviewSession.findUnique({
        where:{
            id:sessionId,
        },
        select:{
            id:true,
            status:true,
            rating:true,
            language:true,
            reviewDraft:{
            select:{
                id:true,
                text:true,
                status:true,
            },
        },
    },
     });

     if(!session){
        throw new NotFoundException(
            'Review session not found'
        );
     }

     return session;
   }    

   async updateDraft(
    sessionId: string,
    dto: UpdateReviewDraftDto,
) {
    const session = await this.prisma.reviewSession.findUnique({
        where: {
            id: sessionId,
        },
        select: {
            id: true,
            status: true,
            reviewDraft: {
                select: {
                    id: true,
                    status: true,
                },
            },
        },
    });

    if (!session) {
        throw new NotFoundException(
            'Review session is not found',
        );
    }

    if (session.status !== 'DRAFT_READY') {
        throw new BadRequestException(
            'Review draft is not available for editing',
        );
    }

    if (!session.reviewDraft) {
        throw new NotFoundException(
            'Review draft is not found',
        );
    }

    if (session.reviewDraft.status !== 'READY') {
        throw new BadRequestException(
            'Review draft cannot be edited',
        );
    }

    const updatedDraft =
        await this.prisma.reviewDraft.update({
            where: {
                id: session.reviewDraft.id,
            },
            data: {
                text: dto.text,
            },
            select: {
                id: true,
                text: true,
                status: true,
            },
        });

    return updatedDraft;
}


async confirmDraft(sessionId:string){
        const session = await this.prisma.reviewSession.findUnique({
            where:{
                id:sessionId,
            },
            select:{
                id:true,
                status:true,
                reviewDraft:{
                    select:{
                        id:true,
                        text:true,
                        status:true
                    },
                },

            },
        });

        if(!session){
            throw new NotFoundException(
                'Review session is not found',
            );
        }

        if(session.status !== 'DRAFT_READY'){
            throw new BadRequestException(
                'Review draft is not ready for confirmation',
            );
        }

        if(!session.reviewDraft){
            throw new NotFoundException(
                'Review draft is not ready for confirmation'
            )
        }

        if(session.reviewDraft.status !== 'READY'){
            throw new BadRequestException(
                'Review draft cannot be confirmed'
            );
        }

        const result = await this.prisma.$transaction(
            async(tx)=>{
                const reviewDraft = 
                await tx.reviewDraft.update({
                    where:{
                        id:session.reviewDraft!.id,
                    },
                    data:{
                        status:'CONFIRMED',
                    },
                    select:{
                        id:true,
                        text:true,
                        status:true,
                    },
                });

                const updatedSession = 
                await tx.reviewSession.update({
                    where:{
                        id:session.id,
                    },
                    data:{
                        status:'CONFIRMED',
                    },
                    select:{
                        id:true,
                        status:true,
                    },
                });

                return {
                    sessionId:updatedSession.id,
                    sessionStatus:updatedSession.status,
                    draft:reviewDraft
                };
            },
        );

        return result;
    }
    async handoff(sessionId: string) {
    const session = await this.prisma.reviewSession.findUnique({
        where: {
            id: sessionId,
        },
        select: {
            id: true,
            status: true,
            location: {
                select: {
                    googleReviewUrl: true,
                },
            },
            reviewDraft: {
                select: {
                    id: true,
                    status: true,
                },
            },
        },
    });

    if (!session) {
        throw new NotFoundException(
            'Review session is not found',
        );
    }

    if (session.status !== 'CONFIRMED') {
        throw new BadRequestException(
            'Review session is not confirmed',
        );
    }

    if (!session.reviewDraft) {
        throw new NotFoundException(
            'Review draft is not found',
        );
    }

    if (session.reviewDraft.status !== 'CONFIRMED') {
        throw new BadRequestException(
            'Review draft is not confirmed',
        );
    }

    if (!session.location.googleReviewUrl) {
        throw new BadRequestException(
            'Google review destination is not configured',
        );
    }

    const updatedSession = await this.prisma.reviewSession.update({
        where: {
            id: session.id,
        },
        data: {
            status: 'HANDED_OFF',
        },
        select: {
            id: true,
            status: true,
        },
    });

    return {
        sessionId: updatedSession.id,
        status: updatedSession.status,
        googleReviewUrl: session.location.googleReviewUrl,
    };
}
}

