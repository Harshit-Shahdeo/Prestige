import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { GroqProvider } from './provider/groq.provider';
import { AI_PROVIDER } from './ai.tokens';
import { AiGateway } from './ai.gateway';
import { AiController } from './ai.controller';

@Module({
  providers: [
    AiService,
    GroqProvider,
    {
      provide: AI_PROVIDER,
      useExisting: GroqProvider,
    },
    AiGateway
  ],
  exports: [AiGateway],
  controllers: [AiController],
})
export class AiModule {}