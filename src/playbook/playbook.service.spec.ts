import { PlaybookDto } from './playbook.dto';
import { PlaybookRepository } from './playbook.repository';
import { PlaybookService } from './playbook.service';

describe('PlaybookService', () => {
  let repo: PlaybookRepository;
  let service: PlaybookService;

  beforeEach(() => {
    const dto = new PlaybookDto();
    dto.id = '0';
    dto.name = 'the playbook';
    repo = new PlaybookRepository([dto]);
    service = new PlaybookService(repo);
  });

  it('should save a valid playbook', () => {
    const newName = 'renamed playbook';
    const playbook = new PlaybookDto();
    playbook.id = '0';
    playbook.name = newName;

    service.save(playbook);
    const updated = repo.findById(playbook.id, 'a tenantId').value;

    expect(updated.name).toEqual(newName);
  });
});
