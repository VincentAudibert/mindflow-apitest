import { ApiProperty } from '@nestjs/swagger';

export class PlaybookComponentDto {
  /**
   * Not usefull unless moving to a flat structure ?
   */
  @ApiProperty({ required: false })
  id?: string;

  /**
   * Type of a component should indicate if it is a on-the-shelf component (and which one eg : SlackUserQuestion, SimpleHttpRequest) or a nested playbook
   */
  @ApiProperty({ required: true })
  type: string;

  @ApiProperty({ required: false })
  name?: string;

  /**
   * Type-dependent configuration (with defaults provided by tenant ?).
   * Must be validated before saving.
   */
  @ApiProperty({ required: false })
  config?: any;

  /**
   * All size, position, color and UI-only related data, to save as-is.
   * No validation, front-end only use
   *
   * TODO : user a concrete class to hold Api annotations, does not hold on types.
   */
  @ApiProperty({ required: false })
  layout?: {
    position?: {
      x: number;
      y: number;
      z: number;
    };
    size?: {
      height?: number;
      width?: number;
    };
    style?: {
      color: string;
    };
  };

  /**
   * Next steps of the playbook.
   * Key : an explicit identifier of the output of the component ("Yes", "timeout")
   * Value : the next component in the flow.
   *     Connected implicitly to the only existing startComponent.
   *     If left opened, output visible to be picked up by parent playbook ?
   * If no outputs, means no further step possible for this flow here.
   */
  @ApiProperty({ required: false })
  outputs?: Map<string, PlaybookComponentDto>;
}
