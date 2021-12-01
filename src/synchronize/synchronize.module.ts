import { Module } from '@nestjs/common';
import { SynchronizeService } from './synchronize.service';
import { Parties } from './enum/parties.enum';
import { IRecipient, ISender } from './interface/recipient.interface';
import { IRawEntry } from './interface/entry.interface';
import { RedmineModule, RedmineService } from '../redmine';
import { TmetricModule, TmetricServiceAdapter } from '../tmetric';

@Module({
  imports: [RedmineModule, TmetricModule],
  providers: [
    SynchronizeService,
    {
      provide: Parties.SENDER,
      useFactory(service: TmetricServiceAdapter): ISender | Promise<ISender> {
        return service;
      },
      inject: [TmetricServiceAdapter],
    },
    {
      provide: Parties.RECIPIENT,
      useFactory(service: RedmineService): IRecipient<IRawEntry> | Promise<IRecipient<IRawEntry>> {
        return service;
      },
      inject: [RedmineService],
    },
  ],
})
export class SynchronizeModule {}
