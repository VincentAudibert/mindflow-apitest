import { Module } from '@nestjs/common';
import { PlaybookController } from './playbook/playbook.controller';

@Module({
  imports: [],
  controllers: [PlaybookController],
  providers: [],
})
export class AppModule {}
