import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { SynchronizeService } from '../../src/synchronize/synchronize.service';
import { RedmineModule, RedmineService } from '../../src/redmine';
import { TmetricModule, TmetricServiceAdapter } from '../../src/tmetric';
import { Parties } from '../../src/synchronize/enum/parties.enum';
import { IRecipient, ISender } from '../../src/synchronize/interface/recipient.interface';
import { IRawEntry } from '../../src/synchronize/interface/entry.interface';

describe('SynchronizeService (e2e)', () => {
  let service: SynchronizeService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), RedmineModule, TmetricModule],
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
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    service = app.get<SynchronizeService>(SynchronizeService);
  });

  it('not throw', async () => {
    await expect(service.list()).resolves.not.toThrow();
  });
});
