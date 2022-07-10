import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getHello2(): Promise<string> {
    return 'Hello ' + process.env.NICE;
  }
}
