import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { PlaybookDto } from './playbook.dto';
import { PlaybookRepository } from './playbook.repository';

/**
 * Playbook endpoints
 *
 * TODO :
 * - auth of user (by JWT ?)
 * - tenant handling as path variable to segregate high-level customers
 *
 */
@ApiTags('playbook')
@Controller('api/:tenantId/playbook')
export class PlaybookController {
  private _repo: PlaybookRepository;

  constructor() {
    const dto = new PlaybookDto();
    dto.id = '0';
    dto.name = 'the playbook';
    this._repo = new PlaybookRepository([dto]);
  }

  @Get(':id')
  @ApiOkResponse({ type: PlaybookDto })
  getById(@Param('id') id: string): PlaybookDto {
    // TODO : use tenantId to check access
    const result = this._repo.findById(id);
    if (result.isFail)
      throw new HttpException('Playbook not found', HttpStatus.NOT_FOUND);
    return result.value;
  }

  @Put()
  @ApiOkResponse()
  update(@Body() json: PlaybookDto): void {
    // TODO : expand data sanitation & pre-validation
    if (!json?.id)
      throw new HttpException('Missing id on playbook', HttpStatus.BAD_REQUEST);

    // TODO : delegate validation & save
    const result = this._repo.save(json);
    if (result.isFail)
      throw new HttpException(
        'playbook not saved' + result.error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return;
  }
}
