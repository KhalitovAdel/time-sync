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

import { IDevartTimeTrackerModelsAccountScope } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Scope<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet
   * @summary Gets account scope
   * @request GET:/api/accounts/{accountId}/scope
   * @response `200` `IDevartTimeTrackerModelsAccountScope` Success
   */
  accountsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccountScope, any>({
      path: `/api/accounts/${accountId}/scope`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
