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

import { IDevartTimeTrackerModelsIntegration, IDevartTimeTrackerModelsJobType, IDevartTimeTrackerModelsScheduledJob } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Integrations<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsGet
   * @summary Gets integrations list
   * @request GET:/api/accounts/{accountId}/integrations
   * @response `200` `(IDevartTimeTrackerModelsIntegration)[]` Success
   */
  integrationsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsIntegration[], any>({
      path: `/api/accounts/${accountId}/integrations`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsPost
   * @summary Creates integration
   * @request POST:/api/accounts/{accountId}/integrations
   * @response `200` `IDevartTimeTrackerModelsIntegration` Success
   */
  integrationsPost = (accountId: string, data: IDevartTimeTrackerModelsIntegration, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsIntegration, any>({
      path: `/api/accounts/${accountId}/integrations`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsGet2
   * @summary Gets specific integration
   * @request GET:/api/accounts/{accountId}/integrations/{integrationId}
   * @originalName integrationsGet
   * @duplicate
   * @response `200` `IDevartTimeTrackerModelsIntegration` Success
   */
  integrationsGet2 = (accountId: number, integrationId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsIntegration, any>({
      path: `/api/accounts/${accountId}/integrations/${integrationId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsPut
   * @summary Edits integration
   * @request PUT:/api/accounts/{accountId}/integrations/{integrationId}
   * @response `200` `void` Success
   */
  integrationsPut = (integrationId: number, accountId: string, data: IDevartTimeTrackerModelsIntegration, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/integrations/${integrationId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsDelete
   * @summary Deletes integration
   * @request DELETE:/api/accounts/{accountId}/integrations/{integrationId}
   * @response `200` `void` Success
   */
  integrationsDelete = (accountId: number, integrationId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/integrations/${integrationId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsGet3
   * @summary Syncs scheduled jobs for current account
   * @request GET:/api/accounts/{accountId}/integrations/sync
   * @originalName integrationsGet
   * @duplicate
   * @response `200` `(IDevartTimeTrackerModelsScheduledJob)[]` Success
   */
  integrationsGet3 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsScheduledJob[], any>({
      path: `/api/accounts/${accountId}/integrations/sync`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsPost2
   * @summary Posts the synchronization.
   * @request POST:/api/accounts/{accountId}/integrations/sync/{integrationId}
   * @originalName integrationsPost
   * @duplicate
   * @response `200` `void` Success
   */
  integrationsPost2 = (accountId: number, integrationId: number, query?: { syncType?: IDevartTimeTrackerModelsJobType; isRepeated?: boolean }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/integrations/sync/${integrationId}`,
      method: 'POST',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsDelete2
   * @summary Deletes the synchronization.
   * @request DELETE:/api/accounts/{accountId}/integrations/sync/{integrationId}
   * @originalName integrationsDelete
   * @duplicate
   * @response `200` `void` Success
   */
  integrationsDelete2 = (accountId: number, integrationId: number, query?: { syncType?: IDevartTimeTrackerModelsJobType }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/integrations/sync/${integrationId}`,
      method: 'DELETE',
      query: query,
      ...params,
    });
}
