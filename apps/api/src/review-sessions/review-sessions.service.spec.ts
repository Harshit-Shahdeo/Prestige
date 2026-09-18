import { Test, TestingModule } from '@nestjs/testing';
import { ReviewSessionsService } from './review-sessions.service';

describe('ReviewSessionsService', () => {
  let service: ReviewSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewSessionsService],
    }).compile();

    service = module.get<ReviewSessionsService>(ReviewSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
