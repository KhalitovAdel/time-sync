import { Test, TestingModule } from '@nestjs/testing';
import { RedmineApi } from '../../src/redmine/redmine.api';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { RedmineInterceptor } from '../../src/redmine/redmine.interceptor';
import { RedmineEntity } from '../../src/redmine/redmine.entity';

describe('RedmineApi (e2e)', () => {
  let service: RedmineApi;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot(), ConfigModule],
      providers: [RedmineApi, RedmineInterceptor],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();
    const interceptor = app.get<RedmineInterceptor>(RedmineInterceptor);
    const httpService = app.get<HttpService>(HttpService);
    service = app.get<RedmineApi>(RedmineApi);

    httpService.axiosRef.interceptors.request.use(interceptor.intercept.bind(interceptor));
  });

  it('create && delete', async () => {
    const entity = await service.create('671', 0.01, 'test');
    expect(entity).toBeInstanceOf(RedmineEntity);
    await expect(service.delete(entity.getId())).resolves.not.toThrow();
  });
});
