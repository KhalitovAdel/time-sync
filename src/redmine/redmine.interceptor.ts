import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpInterceptor } from '../interface/http.interceptor';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class RedmineInterceptor implements HttpInterceptor<AxiosRequestConfig> {
  constructor(@Inject(ConfigService) private readonly cfg: ConfigService<NodeJS.ProcessEnv>) {}

  public intercept(value: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig {
    const token = this.cfg.get('REDMINE_TOKEN');
    if (!token) throw new Error('Token not found');

    value.baseURL = this.cfg.get('REDMINE_URL');
    value.headers = { 'X-Redmine-API-Key': token, 'Content-Type': 'application/json' };
    return value;
  }
}
