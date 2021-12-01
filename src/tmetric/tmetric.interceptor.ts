import { HttpInterceptor } from '../interface/http.interceptor';
import { AxiosRequestConfig } from 'axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TmetricInterceptor implements HttpInterceptor<AxiosRequestConfig> {
  constructor(@Inject(ConfigService) private readonly cfg: ConfigService<NodeJS.ProcessEnv>) {}

  public intercept(value: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig {
    const token = this.cfg.get('TMETRIC_TOKEN');
    if (!token) throw new Error('Token not found');

    value.baseURL = this.cfg.get('TMETRIC_URL');
    value.headers = { Authorization: `Bearer ${token}` };
    return value;
  }
}
