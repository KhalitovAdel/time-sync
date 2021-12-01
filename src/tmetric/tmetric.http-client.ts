import { HttpClient } from '../generated/tmetric-api/http-client';
import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TmetricHttpClient extends HttpClient {
  constructor(@Inject(HttpService) private readonly http: HttpService) {
    super();
    this.instance = this.http.axiosRef;
  }
}
