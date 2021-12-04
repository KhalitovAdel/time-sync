/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { IDevartTimeTrackerModelsWebToolIssueTimer } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Timer<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TimerV2
   * @name TimerV2Post
   * @summary Creates timer from issue
   * @request POST:/api/accounts/{accountId}/timer/issue
   * @response `200` `void` Success
   */
  timerV2Post = (accountId: number, data: IDevartTimeTrackerModelsWebToolIssueTimer, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timer/issue`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
