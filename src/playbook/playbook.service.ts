import { Result } from 'src/shared/result';
import { PlaybookDto } from './playbook.dto';
import { PlaybookRepository } from './playbook.repository';

/**
 * Service to hold validation logic of a playbook.
 *
 * TODO : move to a more OOP approach by instantiating a rich Playbook model that can self-validate when enough logic here.
 */
export class PlaybookService {
  constructor(private repo: PlaybookRepository) {}

  save(dto: PlaybookDto): Result<void> {
    return this.repo.save(dto);
  }
}
