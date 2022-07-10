import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getHello2(): Promise<string> {
    return 'Hello ' + this.configService.get('DB_PASSWORD');
  }
}
