import { Controller, Get } from '@nestjs/common';
import { AiGateway } from './ai.gateway';

@Controller('ai')
export class AiController {
    constructor(
        private readonly aiGateway:AiGateway,
    ){}

    @Get('test')
    async test(){
        return this.aiGateway.analyzeFeedback({
  businessType: 'cafe',
  language:'English',
  rating: 1,
  keywords: [
  { name: 'food', sentiment: 'NEGATIVE' },
  { name: 'service', sentiment: 'NEGATIVE' },
  { name: 'ambience', sentiment: 'NEGATIVE' },
],
});
    }
}
