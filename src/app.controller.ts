import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppLogger } from './common/utils/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: AppLogger,
  ) {}

  @Get('/dev')
  getData(): string {
    this.logger.debug('hello, my first log in hyper content service!');
    return this.appService.getData();
  }

  @Post('/createApi')
  createResource(): string {
    return 'created!';
  }
}
