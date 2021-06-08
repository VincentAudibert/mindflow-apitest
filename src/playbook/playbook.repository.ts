import { Result } from 'src/shared/result';
import { PlaybookDto } from './playbook.dto';

/**
 * A simple in-memory repository for tests & dev
 *
 * Should be later behind an interface for easy DI
 */
export class PlaybookRepository {
  private _playbooks: PlaybookDto[];

  constructor(playbooks: PlaybookDto[] = []) {
    this._playbooks = playbooks;
  }

  findById(id: string, tenantId: string): Result<PlaybookDto> {
    // TODO : use tenantId to check access
    const lookup = this._playbooks.find((p) => p.id == id);
    if (!lookup) return Result.fail('not found');
    return Result.ok(lookup);
  }

  save(playbook: PlaybookDto): Result<void> {
    const index = this._playbooks.findIndex((p) => p.id == playbook.id);
    if (index < 0) return Result.fail('not found');
    this._playbooks[index] = playbook;
    return Result.ok();
  }
}
