import { Test, TestingModule } from '@nestjs/testing';
import { PlaybookController } from './playbook.controller';

describe('PlaybookController', () => {
  let controller: PlaybookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlaybookController],
      providers: [],
    }).compile();

    controller = app.get<PlaybookController>(PlaybookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
