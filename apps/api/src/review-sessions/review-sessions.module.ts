import { Module } from '@nestjs/common';
import { ReviewSessionsController } from './review-sessions.controller';
import { ReviewSessionsService } from './review-sessions.service';

@Module({
  controllers: [ReviewSessionsController],
  providers: [ReviewSessionsService]
})
export class ReviewSessionsModule {}
