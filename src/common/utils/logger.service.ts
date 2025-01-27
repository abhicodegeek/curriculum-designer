import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppLogger extends Logger {
  private readonly logFilePath: string;
  private readonly loggedMessages: Set<string>; // Track logged messages to avoid duplicates

  constructor() {
    super();
    this.logFilePath = path.resolve('logs', 'app.log');
    this.loggedMessages = new Set(); // Initialize the set

    // Ensure logs directory exists
    if (!fs.existsSync(path.dirname(this.logFilePath))) {
      fs.mkdirSync(path.dirname(this.logFilePath), { recursive: true });
    }
  }

  log(message: string, context?: string): void {
    if (!this.loggedMessages.has(message)) {
      super.log(message, context); // Log to console
      this.writeToFile('LOG', message, context); // Log to file
      this.loggedMessages.add(message); // Track the message to prevent duplicate logs
    }
  }

  error(message: string, trace?: string, context?: string): void {
    super.error(message, trace, context);
    this.writeToFile('ERROR', message, context, trace);
  }

  warn(message: string, context?: string): void {
    super.warn(message, context);
    this.writeToFile('WARN', message, context);
  }

  debug(message: string, context?: string): void {
    super.debug(message, context);
    this.writeToFile('DEBUG', message, context);
  }

  verbose(message: string, context?: string): void {
    super.verbose(message, context);
    this.writeToFile('VERBOSE', message, context);
  }

  private writeToFile(
    level: string,
    message: string,
    context?: string,
    trace?: string,
  ): void {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level}] ${context || ''} - ${message}`;
    if (trace) {
      fs.appendFileSync(this.logFilePath, `${logMessage}\nTrace: ${trace}\n`);
    } else {
      fs.appendFileSync(this.logFilePath, `${logMessage}\n`);
    }
  }
}
