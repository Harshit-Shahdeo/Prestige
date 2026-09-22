import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReviewSessionsModule } from './review-sessions/review-sessions.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    PrismaModule,
    ReviewSessionsModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}