import { Body, Controller, Param, Post, Get, Patch, NotFoundException, BadRequestException } from '@nestjs/common';
import { ReviewSessionsService } from './review-sessions.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto';
import { UpdateReviewDraftDto } from './dto/update-review-draft.dto';

@Controller('review-sessions')
export class ReviewSessionsController {
    constructor(
        private readonly reviewSessionService:ReviewSessionsService,
    ){}

    @Post()
    create(@Body('tableToken') tableToken:string){
        return this.reviewSessionService.create(tableToken);
    }

    @Post(':sessionId/feedback')
    submitFeedback(
        @Param('sessionId') sessionId: string,
        @Body() dto:SubmitFeedbackDto,
    ){
        return this.reviewSessionService.submitFeedback(sessionId, dto);
    }

    @Get(':sessionId')
    getSession(
        @Param('sessionId')  sessionId:string,
    ){
        return this.reviewSessionService.getSession(sessionId);
    }

    @Patch(':sessionId/draft')
    updateDraft(
        @Param('sessionId') sessionId:string,
        @Body() dto:UpdateReviewDraftDto,

    ){
        return this.reviewSessionService.updateDraft(
            sessionId, dto

        )
    }

    @Patch(':sessionId/confirm')
confirmDraft(
    @Param('sessionId') sessionId: string,
) {
    return this.reviewSessionService.confirmDraft(sessionId);
}

@Post(':sessionId/handoff')
handoff(
    @Param('sessionId') sessionId: string,
) {
    return this.reviewSessionService.handoff(sessionId);
}

}