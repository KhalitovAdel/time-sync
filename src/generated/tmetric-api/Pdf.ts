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

export class Pdf<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReportAppsUsage
   * @name ReportAppsUsageGet
   * @summary Gets the summary activity report as PDF.
   * @request GET:/api/reports/appsusage/pdf
   * @response `200` `void` Success
   */
  reportAppsUsageGet = (
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
    this.http.request<void, any>({
      path: `/api/reports/appsusage/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportDetailed
   * @name ReportDetailedGet
   * @summary Gets the detailed report as PDF.
   * @request GET:/api/reports/detailed/pdf
   * @response `200` `void` Success
   */
  reportDetailedGet = (
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
    this.http.request<void, any>({
      path: `/api/reports/detailed/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
}
