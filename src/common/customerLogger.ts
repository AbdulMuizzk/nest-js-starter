import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  constructor() {
    super();
  }
  async log(message: string) {
    super.log(message);
  }
  async debug(message: string) {
    super.debug(message);
  }
  async warn(message: string) {
    super.warn(message);
  }
  async error(message: string, trace: string) {
    super.error(message, trace);
  }
}
