import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, WorkspacesModule, ChannelsModule, DmsModule],
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
