import { Body, Controller, Param, Post } from '@nestjs/common';
import { ReviewSessionsService } from './review-sessions.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto';

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
    
}
