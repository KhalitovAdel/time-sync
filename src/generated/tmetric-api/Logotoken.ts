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

import { HttpClient, RequestParams } from './http-client';

export class Logotoken<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet
   * @request GET:/api/accounts/{accountId}/logotoken
   * @response `200` `string` Success
   */
  accountsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/logotoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
