import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SynchronizeService } from './synchronize';
import { Handler } from 'aws-lambda';
import { HttpStatus } from '@nestjs/common';

export const handler: Handler = async () => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService: SynchronizeService = appContext.get<SynchronizeService>(SynchronizeService);

  return {
    body: await appService.list(),
    statusCode: HttpStatus.OK,
  };
};
