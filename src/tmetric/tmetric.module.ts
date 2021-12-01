import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { TmetricService } from './tmetric.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TmetricApi } from './tmetric.api';
import { TmetricServiceAdapter } from './adapter/tmetric-service.adapter';
import { TmetricHttpClient } from './tmetric.http-client';
import { TmetricInterceptor } from './tmetric.interceptor';

@Module({
  imports: [HttpModule.register({}), ConfigModule],
  providers: [TmetricService, TmetricApi, TmetricServiceAdapter, TmetricHttpClient, TmetricInterceptor],
  exports: [TmetricServiceAdapter],
})
export class TmetricModule implements OnModuleInit {
  constructor(@Inject(TmetricInterceptor) private readonly interceptor: TmetricInterceptor, @Inject(HttpService) private readonly http: HttpService) {}

  public onModuleInit(): void {
    this.http.axiosRef.interceptors.request.use(this.interceptor.intercept.bind(this.interceptor));
  }
}

export { TmetricServiceAdapter };
