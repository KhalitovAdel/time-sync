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

import { IDevartTimeTrackerModelsClient } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Clients<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Clients
   * @name ClientsGet
   * @summary Gets all clients visible for current member in specific account.
   * @request GET:/api/accounts/{accountId}/clients
   * @response `200` `(IDevartTimeTrackerModelsClient)[]` Success
   */
  clientsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsClient[], any>({
      path: `/api/accounts/${accountId}/clients`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsPost
   * @summary Posts the new client.
   * @request POST:/api/accounts/{accountId}/clients
   * @response `200` `IDevartTimeTrackerModelsClient` Success
   */
  clientsPost = (accountId: number, data: IDevartTimeTrackerModelsClient, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsClient, any>({
      path: `/api/accounts/${accountId}/clients`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsGet2
   * @summary Gets the specific account client.
   * @request GET:/api/accounts/{accountId}/clients/{clientId}
   * @originalName clientsGet
   * @duplicate
   * @response `200` `IDevartTimeTrackerModelsClient` Success
   */
  clientsGet2 = (accountId: number, clientId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsClient, any>({
      path: `/api/accounts/${accountId}/clients/${clientId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsPut
   * @summary Puts the project. Updates client name and color.
   * @request PUT:/api/accounts/{accountId}/clients/{clientId}
   * @response `200` `void` Success
   */
  clientsPut = (accountId: number, clientId: string, data: IDevartTimeTrackerModelsClient, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/clients/${clientId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    }); /**
 * No description
 * 
 * @tags Clients
 * @name ClientsDelete
 * @summary Deletes the client from the account.
Nulls client identifier in all related projects.
 * @request DELETE:/api/accounts/{accountId}/clients/{clientId}
 * @response `200` `void` Success
 */
  clientsDelete = (accountId: number, clientId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/clients/${clientId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsGet3
   * @request GET:/api/accounts/{accountId}/clients/avatartoken
   * @originalName clientsGet
   * @duplicate
   * @response `200` `string` Success
   */
  clientsGet3 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/clients/avatartoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
