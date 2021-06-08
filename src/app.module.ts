import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaybookController } from './playbook/playbook.controller';

@Module({
  imports: [],
  controllers: [AppController, PlaybookController],
  providers: [AppService],
})
export class AppModule {}
