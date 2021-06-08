import { ApiProperty } from '@nestjs/swagger';

export class PlaybookDto {
  @ApiProperty({ required: false })
  id?: string;
}
