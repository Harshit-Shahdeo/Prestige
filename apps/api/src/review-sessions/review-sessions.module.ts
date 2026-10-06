import { Module } from '@nestjs/common';
import { ReviewSessionsController } from './review-sessions.controller';
import { ReviewSessionsService } from './review-sessions.service';
import { AiModule } from 'src/ai/ai.module';
@Module({
  imports:[AiModule],
  controllers: [ReviewSessionsController],
  providers: [ReviewSessionsService]
})
export class ReviewSessionsModule {}
