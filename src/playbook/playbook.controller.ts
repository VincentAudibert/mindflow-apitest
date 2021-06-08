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
 * - auth of user
 * - tenant handling
 *
 */
@ApiTags('playbook')
@Controller('playbook')
export class PlaybookController {
  private _repo: PlaybookRepository;

  constructor() {
    const dto = new PlaybookDto();
    dto.id = '0';
    this._repo = new PlaybookRepository([dto]);
  }

  @Get(':id')
  @ApiOkResponse({ type: PlaybookDto })
  getById(@Param('id') id: string): PlaybookDto {
    const result = this._repo.findById(id);
    if (result.isFail)
      throw new HttpException('Playbook not found', HttpStatus.NOT_FOUND);
    return result.value;
  }

  @Put()
  @ApiOkResponse()
  update(@Body() json: PlaybookDto): void {
    return;
  }
}
