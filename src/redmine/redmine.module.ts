import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { RedmineService } from './redmine.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { RedmineInterceptor } from './redmine.interceptor';
import { RedmineApi } from './redmine.api';

@Module({
  imports: [HttpModule.register({}), ConfigModule],
  providers: [RedmineService, RedmineInterceptor, RedmineApi],
  exports: [RedmineService],
})
export class RedmineModule implements OnModuleInit {
  constructor(@Inject(RedmineInterceptor) private readonly interceptor: RedmineInterceptor, @Inject(HttpService) private readonly http: HttpService) {}

  public onModuleInit(): void {
    this.http.axiosRef.interceptors.request.use(this.interceptor.intercept.bind(this.interceptor));
  }
}

export { RedmineService };
