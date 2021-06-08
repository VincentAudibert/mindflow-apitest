import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { PlaybookDto } from './playbook.dto';

@ApiTags('playbook')
@Controller('playbook')
export class PlaybookController {
  @Get(':id')
  @ApiOkResponse({ type: PlaybookDto })
  getById(@Param('id') id: string): PlaybookDto {
    return null;
  }

  @Put()
  @ApiOkResponse()
  create(@Body() json: PlaybookDto): void {
    return;
  }
}
