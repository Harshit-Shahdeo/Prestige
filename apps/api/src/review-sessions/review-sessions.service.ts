import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto';
import { Sentiment } from '@prisma/client';

@Injectable()
export class ReviewSessionsService {
    constructor(private readonly prisma : PrismaService){}

    async create(tableToken: string){
        const table = await this.prisma.table.findUnique({
            where:{
                qrToken: tableToken
            },
        });

        if(!table){
            throw new NotFoundException('Invalid table token');
        }

        const session = await this.prisma.reviewSession.create({
            data: {
        tenantId: await this.getTenantId(table.locationId),
        locationId: table.locationId,
        tableId: table.id,
      },
    });
            return{
                sessionId:session.id,
                status:session.status,
            }
    
}
    private async getTenantId(loactionId:string){
        const location = await this.prisma.location.findUnique({
            where:{
                id:loactionId,
            },
            select:{
                tenantId:true
            },
        });

        if(!location){
            throw new NotFoundException('Location not found')
        }

        return location.tenantId;
    }

    async submitFeedback(sessionId:string, dto:SubmitFeedbackDto){
        const session = await this.prisma.reviewSession.findUnique({
            where:{
                id:sessionId
            },
            select:{
                id:true,
                tenantId:true,
                status:true,
            }
        });

        if(!session){
            throw new NotFoundException('Review session is not found');
        }

        if(session.status !== 'STARTED'){
            throw new BadRequestException(
                'Review session is not accepting feedbacks'
            )
        }

        const keywordsId = dto.keywords.map(
            (keyword)=> keyword.keywordId,
        );

        const uniqueKeywordIds = new Set(keywordsId);

        if(uniqueKeywordIds.size !== keywordsId.length){
            throw new BadRequestException(
                'Dupliacte keywords are not allowed'
            )
        }

        const keywords = await this.prisma.keyword.findMany({
            where:{
                id:{
                    in:keywordsId,
                },
                tenantId:session.tenantId,
            },
            select:{
                id:true,
            },
        });

        if(keywords.length !== keywordsId.length){
            throw new NotFoundException('One or more keywords were not found');
        }

    const result = await this.prisma.$transaction(async (tx)=>{
        const feedback = await tx.feedback.create({
            data:{
                sessionId:session.id
            },
        });

        await tx.feedbackKeyword.createMany({
            data:dto.keywords.map((keyword)=>({
                feedbackId:feedback.id,
                keywordId: keyword.keywordId,
                sentiment: keyword.sentiment
            })),
        });

        const updatedSession = await tx.reviewSession.update({
            where:{
                id:session.id,
            },
            data:{
                rating: dto.rating,
                status:'FEEDBACK_RECEIVED'
            },
        });

        return{
            sessionId:updatedSession.id,
            rating:updatedSession.rating,
            status:updatedSession.status
        }
    });

    return result;

    }

}
