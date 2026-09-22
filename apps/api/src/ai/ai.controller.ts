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
  rating: 3,
  keywords: ['food', 'service', 'ambience'],
});
    }
}
