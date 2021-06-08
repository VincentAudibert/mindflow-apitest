import { Result } from 'src/shared/result';
import { PlaybookDto } from './playbook.dto';

/**
 * A simple in-memory repository for tests & dev
 */
export class PlaybookRepository {
  private _playbooks: PlaybookDto[];

  constructor(playbooks: PlaybookDto[] = []) {
    this._playbooks = playbooks;
  }

  findById(id: string): Result<PlaybookDto> {
    const lookup = this._playbooks.find((p) => p.id == id);
    if (!lookup) return Result.fail('not found');
    return Result.ok(lookup);
  }
}
