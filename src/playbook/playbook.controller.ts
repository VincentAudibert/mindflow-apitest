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
import { PlaybookService } from './playbook.service';

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
  private repo: PlaybookRepository;
  private service: PlaybookService;

  constructor() {
    const dto = new PlaybookDto();
    dto.id = '0';
    dto.name = 'the playbook';
    this.repo = new PlaybookRepository([dto]);
    this.service = new PlaybookService(this.repo);
  }

  @Get(':id')
  @ApiOkResponse({ type: PlaybookDto })
  getById(
    @Param('id') id: string,
    @Param('tenantId') tenantId: string,
  ): PlaybookDto {
    const result = this.repo.findById(id, tenantId);
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

    // TODO : make a full-fledge entity Playbook, let it validate itself and save it.

    const result = this.service.save(json);
    if (result.isFail)
      throw new HttpException(
        'playbook not saved' + result.error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return;
  }
}
