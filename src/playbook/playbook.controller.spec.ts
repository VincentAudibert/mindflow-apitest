import { Test, TestingModule } from '@nestjs/testing';
import { expectHttpException } from 'src/test/utils';
import { PlaybookController } from './playbook.controller';
import { PlaybookDto } from './playbook.dto';

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

  describe('GET a playbook by id', () => {
    it('should return an existing playbook', () => {
      expect(controller.getById('0', 'a tenantId')).toBeTruthy();
    });

    it('should 404 a non-existing playbook', () => {
      expectHttpException(
        () => controller.getById('123456', 'a tenantId'),
        404,
      );
    });
  });

  describe('PUT a playbook', () => {
    it('should 400 a id-less playbook', () => {
      expectHttpException(() => controller.update({ name: 'some name' }), 400);
    });

    // TODO : duplication with service, make test thinner
    it('should save a valid playbook', () => {
      const newName = 'renamed playbook';
      const playbook = new PlaybookDto();
      playbook.id = '0';
      playbook.name = newName;

      controller.update(playbook);
      const updated = controller.getById(playbook.id, 'a tenantId');

      expect(updated.name).toEqual(newName);
    });

    it('should 500 an invalid playbook', () => {
      const newName = 'whatever playbook';
      const playbook = new PlaybookDto();
      playbook.id = '123456';
      playbook.name = newName;

      expectHttpException(() => controller.update(playbook), 500);
    });
  });
});
