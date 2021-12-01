import { Test, TestingModule } from '@nestjs/testing';
import { TmetricApi } from '../../src/tmetric/tmetric.api';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TmetricHttpClient } from '../../src/tmetric/tmetric.http-client';
import { TmetricInterceptor } from '../../src/tmetric/tmetric.interceptor';

describe('TmetricApi (e2e)', () => {
  let service: TmetricApi;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot(), ConfigModule],
      providers: [TmetricApi, TmetricHttpClient, TmetricInterceptor],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    const interceptor = app.get<TmetricInterceptor>(TmetricInterceptor);
    const httpService = app.get<HttpService>(HttpService);

    service = app.get<TmetricApi>(TmetricApi);

    httpService.axiosRef.interceptors.request.use(interceptor.intercept.bind(interceptor));
  });

  it('list', async () => {
    const entities = await service.list(new Date(2021, 1, 1).toISOString());
    expect(entities).not.toHaveLength(0);
  });

  it('updateOne', async () => {
    const entities = await service.list(new Date(2021, 1, 1).toISOString());
    if (!entities.length) throw new Error('Impossible');
    const firstEntry = entities.shift();

    firstEntry.markAsSuccessSynchronized();
    expect(firstEntry.isSynchronizedSuccess()).toEqual(true);
    await service.updateOne(firstEntry);
    expect(firstEntry.isSynchronizedSuccess()).toEqual(true);
    firstEntry.markAsErrorSynchronized();
    expect(firstEntry.isSynchronizedSuccess()).toEqual(false);

    await service.updateOne(firstEntry);
    expect(firstEntry.isSynchronizedSuccess()).toEqual(false);
  });
});
