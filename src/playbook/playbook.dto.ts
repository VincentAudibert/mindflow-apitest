import { ApiProperty } from '@nestjs/swagger';

/**
 * Dto for a playbook, should be anemic and front-oriented
 */
export class PlaybookDto {
  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({ required: true })
  name: string;

  /**
   * The start component should contain all following components in a nested structure mirroring the graph displayed in UI.
   */
  startComponent?: PlaybookComponentDto;
}

export class PlaybookComponentDto {
  /**
   * Not usefull unless moving to a flat structure ?
   */
  id?: string;

  /**
   * Type of a component should indicate if it is a on-the-shelf component (and which one eg : SlackUserQuestion, SimpleHttpRequest) or a nested playbook
   */
  type: string;

  name?: string;

  /**
   * Type-dependent configuration (with defaults provided by tenant ?).
   * Must be validated before saving.
   */
  config?: any;

  /**
   * All size, position, color and UI-only related data, to save as-is
   */
  layout: any;

  outputs: Map<string, PlaybookComponentDto>;
}
