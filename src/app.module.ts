import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    ConfigService,
    AppService,
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: AppService,
      useValue: 'valueValue'
    },
    {
      provide: AppService,
      useFactory: () => {
        return {
          a: 'a',
          b: 'b'
        };
        //return new AppService();
      }
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
