import { Test, TestingModule } from '@nestjs/testing';
import { expectHttpException } from 'src/test/utils';
import { PlaybookController } from './playbook.controller';

/**
 * Playbook Controller tests
 *
 * Scope is the translation from the domain to the API layer, not domain logic.
 */
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

  it('should return an existing playbook', () => {
    expect(controller.getById('0')).toBeTruthy();
  });

  it('should 404 a non-existing playbook', () => {
    expectHttpException(() => controller.getById('123456'), 404);
  });
});
