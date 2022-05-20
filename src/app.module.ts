import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import config from './config/index';
import { CatModule } from './controller/cat/cat.module';

const { USER, PASSWORD, PORT, DB, HOST } = config.MYSQL_CONFIG;

@Module({
  imports: [
    CatModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: HOST,
      port: PORT,
      username: USER,
      password: PASSWORD,
      database: DB,
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
      },
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class AppModule {}
