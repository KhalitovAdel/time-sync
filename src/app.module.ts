import { Module } from '@nestjs/common';
import { SynchronizeModule } from './synchronize';
import { ConfigModule } from '@nestjs/config';
import { RedmineModule } from './redmine';
import { TmetricModule } from './tmetric';

@Module({
  imports: [ConfigModule.forRoot(), SynchronizeModule, RedmineModule, TmetricModule],
})
export class AppModule {}
