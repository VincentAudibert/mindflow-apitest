import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('community')
@Controller('community')
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

class PlaybookDto {}
