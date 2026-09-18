import { Test, TestingModule } from '@nestjs/testing';
import { ReviewSessionsController } from './review-sessions.controller';

describe('ReviewSessionsController', () => {
  let controller: ReviewSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewSessionsController],
    }).compile();

    controller = module.get<ReviewSessionsController>(ReviewSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
