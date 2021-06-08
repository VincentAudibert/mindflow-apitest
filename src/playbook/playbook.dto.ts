import { ApiProperty } from '@nestjs/swagger';
import { PlaybookComponentDto } from './playbook-component.dto';

/**
 * Dto for a playbook, should be anemic and front-oriented.
 */
export class PlaybookDto {
  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({ required: true })
  name: string;

  /**
   * The start component should contain all following components in a nested structure mirroring the graph displayed in UI.
   */
  @ApiProperty({ required: false })
  startComponent?: PlaybookComponentDto;
}
