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

import { IDevartTimeTrackerModelsActivityReportRow } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Activity<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Activity
   * @name ActivityDelete
   * @request DELETE:/api/accounts/{accountId}/activity/{userProfileId}
   * @response `200` `void` Success
   */
  activityDelete = (accountId: number, userProfileId: number, query?: { timestamp?: string }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/activity/${userProfileId}`,
      method: 'DELETE',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityDelete2
   * @request DELETE:/api/accounts/{accountId}/activity/{userProfileId}/all
   * @originalName activityDelete
   * @duplicate
   * @response `200` `void` Success
   */
  activityDelete2 = (accountId: number, userProfileId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/activity/${userProfileId}/all`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityGet
   * @request GET:/api/accounts/{accountId}/activity/screenshots
   * @response `200` `Record<string, (string)[]>` Success
   */
  activityGet = (accountId: number, query?: { userProfileId?: number; date?: string }, params: RequestParams = {}) =>
    this.http.request<Record<string, string[]>, any>({
      path: `/api/accounts/${accountId}/activity/screenshots`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityGet2
   * @request GET:/api/accounts/{accountId}/activity/screenshots/dates
   * @originalName activityGet
   * @duplicate
   * @response `200` `(string)[]` Success
   */
  activityGet2 = (accountId: number, query?: { userProfileId?: number }, params: RequestParams = {}) =>
    this.http.request<string[], any>({
      path: `/api/accounts/${accountId}/activity/screenshots/dates`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityGet3
   * @request GET:/api/accounts/{accountId}/activity/screenshots/token
   * @originalName activityGet
   * @duplicate
   * @response `200` `string` Success
   */
  activityGet3 = (accountId: number, query?: { timestamp?: string }, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/activity/screenshots/token`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportActivity
   * @name ReportActivityGet
   * @summary Gets the summary activity report.
   * @request GET:/api/reports/summary/activity
   * @response `200` `(IDevartTimeTrackerModelsActivityReportRow)[]` Success
   */
  reportActivityGet = (
    query?: {
      ProjectList?: number[];
      ClientList?: number[];
      TagList?: number[];
      GroupColumnNames?: string[];
      HiddenColumns?: string[];
      ActiveProjectsOnly?: boolean;
      Billable?: boolean;
      Invoiced?: boolean;
      NoRounding?: boolean;
      TimeEntryFilter?: string;
      ChartValue?: string;
      UseUtcTime?: boolean;
      AccountId?: number;
      ProfileList?: number[];
      GroupList?: number[];
      StartDate?: string;
      EndDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<IDevartTimeTrackerModelsActivityReportRow[], any>({
      path: `/api/reports/summary/activity`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportActivity
   * @name ReportActivityGet2
   * @summary Gets the activity summary report as CSV.
   * @request GET:/api/reports/summary/activity/csv
   * @originalName reportActivityGet
   * @duplicate
   * @response `200` `void` Success
   */
  reportActivityGet2 = (
    query?: {
      ProjectList?: number[];
      ClientList?: number[];
      TagList?: number[];
      GroupColumnNames?: string[];
      HiddenColumns?: string[];
      ActiveProjectsOnly?: boolean;
      Billable?: boolean;
      Invoiced?: boolean;
      NoRounding?: boolean;
      TimeEntryFilter?: string;
      ChartValue?: string;
      UseUtcTime?: boolean;
      AccountId?: number;
      ProfileList?: number[];
      GroupList?: number[];
      StartDate?: string;
      EndDate?: string;
      isAbsoluteTime?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/api/reports/summary/activity/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportActivity
   * @name ReportActivityGet3
   * @summary Gets the activity summary report as PDF.
   * @request GET:/api/reports/summary/activity/pdf
   * @originalName reportActivityGet
   * @duplicate
   * @response `200` `void` Success
   */
  reportActivityGet3 = (
    query?: {
      ProjectList?: number[];
      ClientList?: number[];
      TagList?: number[];
      GroupColumnNames?: string[];
      HiddenColumns?: string[];
      ActiveProjectsOnly?: boolean;
      Billable?: boolean;
      Invoiced?: boolean;
      NoRounding?: boolean;
      TimeEntryFilter?: string;
      ChartValue?: string;
      UseUtcTime?: boolean;
      AccountId?: number;
      ProfileList?: number[];
      GroupList?: number[];
      StartDate?: string;
      EndDate?: string;
      isAbsoluteTime?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/api/reports/summary/activity/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
}
