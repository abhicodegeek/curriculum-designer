import { Injectable } from '@nestjs/common';
import { AppLogger } from './common/utils/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: AppLogger) {}

  getData(): string {
    this.logger.debug('Application service file');
    return 'New MOc rules defined!';
  }
}
