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

import { ITMetricTimeEntriesDomainModelsGroupTimeEntries, ITMetricTimeEntriesDomainModelsRecentWorkTaskLegacy, ITMetricTimeEntriesDomainModelsTimeEntry } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Timeentries<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags RecentTasksLegacy
   * @name RecentTasksLegacyGet
   * @summary Gets recent tasks
   * @request GET:/api/accounts/{accountId}/timeentries/recent
   * @response `200` `(ITMetricTimeEntriesDomainModelsRecentWorkTaskLegacy)[]` Success
   */
  recentTasksLegacyGet = (accountId: number, query?: { taskCount?: number; includeEmpty?: boolean }, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeEntriesDomainModelsRecentWorkTaskLegacy[], any>({
      path: `/api/accounts/${accountId}/timeentries/recent`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeEntries
   * @name TimeEntriesGet
   * @summary Gets time entries
   * @request GET:/api/accounts/{accountId}/timeentries/{userProfileId}
   * @response `200` `(ITMetricTimeEntriesDomainModelsTimeEntry)[]` Success
   */
  timeEntriesGet = (
    accountId: number,
    userProfileId: number,
    query?: { StartTime?: string; EndTime?: string; useUtcTime?: boolean; includeDeleted?: boolean; truncate?: boolean },
    params: RequestParams = {},
  ) =>
    this.http.request<ITMetricTimeEntriesDomainModelsTimeEntry[], any>({
      path: `/api/accounts/${accountId}/timeentries/${userProfileId}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeEntries
   * @name TimeEntriesPost
   * @summary Edits/deletes single time entry
   * @request POST:/api/accounts/{accountId}/timeentries/{userProfileId}
   * @response `200` `void` Success
   */
  timeEntriesPost = (accountId: number, userProfileId: number, data: ITMetricTimeEntriesDomainModelsTimeEntry, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timeentries/${userProfileId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeEntries
   * @name TimeEntriesPost2
   * @summary Edits/deletes multiple time entries
   * @request POST:/api/accounts/{accountId}/timeentries/{userProfileId}/bulk
   * @originalName timeEntriesPost
   * @duplicate
   * @response `200` `void` Success
   */
  timeEntriesPost2 = (accountId: number, userProfileId: number, data: ITMetricTimeEntriesDomainModelsTimeEntry[], params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timeentries/${userProfileId}/bulk`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeEntries
   * @name TimeEntriesGet2
   * @request GET:/api/accounts/{accountId}/timeentries/{userProfileId}/latest
   * @originalName timeEntriesGet
   * @duplicate
   * @response `200` `ITMetricTimeEntriesDomainModelsTimeEntry` Success
   */
  timeEntriesGet2 = (accountId: number, userProfileId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeEntriesDomainModelsTimeEntry, any>({
      path: `/api/accounts/${accountId}/timeentries/${userProfileId}/latest`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeEntries
   * @name TimeEntriesGet3
   * @summary Gets time entries of specific team
   * @request GET:/api/accounts/{accountId}/timeentries/group/{userGroupId}
   * @originalName timeEntriesGet
   * @duplicate
   * @response `200` `(ITMetricTimeEntriesDomainModelsGroupTimeEntries)[]` Success
   */
  timeEntriesGet3 = (accountId: number, userGroupId: number, query?: { StartTime?: string; EndTime?: string; useUtcTime?: boolean }, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeEntriesDomainModelsGroupTimeEntries[], any>({
      path: `/api/accounts/${accountId}/timeentries/group/${userGroupId}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
