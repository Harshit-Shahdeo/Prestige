import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReviewSessionsModule } from './review-sessions/review-sessions.module';
import { AiService } from './ai/ai.service';

@Module({
  imports: [PrismaModule, ReviewSessionsModule],
  controllers: [AppController],
  providers: [AppService, AiService],
})
export class AppModule {}
