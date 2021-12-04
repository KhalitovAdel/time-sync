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

import { IDevartTimeTrackerModelsUserGroup } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Usergroups<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsGet
   * @summary Gets team list for current account
   * @request GET:/api/accounts/{accountId}/usergroups
   * @response `200` `(IDevartTimeTrackerModelsUserGroup)[]` Success
   */
  userGroupsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsUserGroup[], any>({
      path: `/api/accounts/${accountId}/usergroups`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsPost
   * @summary Creates a new team
   * @request POST:/api/accounts/{accountId}/usergroups
   * @response `200` `IDevartTimeTrackerModelsUserGroup` Success
   */
  userGroupsPost = (accountId: number, data: IDevartTimeTrackerModelsUserGroup, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsUserGroup, any>({
      path: `/api/accounts/${accountId}/usergroups`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsGet2
   * @summary Gets team by team id
   * @request GET:/api/accounts/{accountId}/usergroups/{userGroupId}
   * @originalName userGroupsGet
   * @duplicate
   * @response `200` `IDevartTimeTrackerModelsUserGroup` Success
   */
  userGroupsGet2 = (accountId: number, userGroupId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsUserGroup, any>({
      path: `/api/accounts/${accountId}/usergroups/${userGroupId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsPut
   * @summary Edits team
   * @request PUT:/api/accounts/{accountId}/usergroups/{userGroupId}
   * @response `200` `void` Success
   */
  userGroupsPut = (accountId: number, userGroupId: number, data: IDevartTimeTrackerModelsUserGroup, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/usergroups/${userGroupId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsDelete
   * @summary Deletes group
   * @request DELETE:/api/accounts/{accountId}/usergroups/{userGroupId}
   * @response `200` `void` Success
   */
  userGroupsDelete = (accountId: number, userGroupId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/usergroups/${userGroupId}`,
      method: 'DELETE',
      ...params,
    });
}
