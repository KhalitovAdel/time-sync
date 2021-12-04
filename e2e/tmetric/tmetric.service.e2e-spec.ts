import { Test, TestingModule } from '@nestjs/testing';
import { TmetricApi } from '../../src/tmetric/tmetric.api';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TmetricHttpClient } from '../../src/tmetric/tmetric.http-client';
import { TmetricInterceptor } from '../../src/tmetric/tmetric.interceptor';
import { TmetricService } from '../../src/tmetric/tmetric.service';

describe('TmetricService (e2e)', () => {
  let service: TmetricService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot(), ConfigModule],
      providers: [TmetricApi, TmetricHttpClient, TmetricInterceptor, TmetricService],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    const interceptor = app.get<TmetricInterceptor>(TmetricInterceptor);
    const httpService = app.get<HttpService>(HttpService);

    service = app.get<TmetricService>(TmetricService);

    httpService.axiosRef.interceptors.request.use(interceptor.intercept.bind(interceptor));
  });

  it('list', async () => {
    await expect(service.list()).resolves.not.toThrow();
  });
});
