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

import {
  IDevartTimeTrackerModelsProject,
  IDevartTimeTrackerModelsProjectLite,
  IDevartTimeTrackerModelsProjectsUpdate,
  IDevartTimeTrackerModelsSummaryProjectReportRow,
  ITimeTrackerDomainModelsProjectBillingFilter,
  ITimeTrackerDomainModelsProjectBudgetFilter,
  ITimeTrackerDomainModelsProjectStatusFilter,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Projects<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Get
   * @summary Gets the all projects visible for current member.
   * @request GET:/api/accounts/{accountId}/projects
   * @response `200` `(IDevartTimeTrackerModelsProjectLite)[]` Success
   */
  projectsV2Get = (
    accountId: number,
    query?: {
      ClientList?: number[];
      Status?: ITimeTrackerDomainModelsProjectStatusFilter;
      Billing?: ITimeTrackerDomainModelsProjectBillingFilter;
      Budget?: ITimeTrackerDomainModelsProjectBudgetFilter;
      onlyTracked?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<IDevartTimeTrackerModelsProjectLite[], any>({
      path: `/api/accounts/${accountId}/projects`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Post
   * @summary Creates project
   * @request POST:/api/accounts/{accountId}/projects
   * @response `200` `IDevartTimeTrackerModelsProject` Success
   */
  projectsV2Post = (accountId: number, data: IDevartTimeTrackerModelsProject, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsProject, any>({
      path: `/api/accounts/${accountId}/projects`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Get2
   * @summary Gets specific project
   * @request GET:/api/accounts/{accountId}/projects/{projectId}
   * @originalName projectsV2Get
   * @duplicate
   * @response `200` `IDevartTimeTrackerModelsProject` Success
   */
  projectsV2Get2 = (accountId: number, projectId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsProject, any>({
      path: `/api/accounts/${accountId}/projects/${projectId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Put
   * @summary Edits project
   * @request PUT:/api/accounts/{accountId}/projects/{projectId}
   * @response `200` `void` Success
   */
  projectsV2Put = (accountId: number, projectId: number, data: IDevartTimeTrackerModelsProject, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/projects/${projectId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Delete
   * @summary Deletes project
   * @request DELETE:/api/accounts/{accountId}/projects/{projectId}
   * @response `200` `void` Success
   */
  projectsV2Delete = (accountId: number, projectid: number, projectId: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/projects/${projectId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Get3
   * @request GET:/api/accounts/{accountId}/projects/avatartoken
   * @originalName projectsV2Get
   * @duplicate
   * @response `200` `string` Success
   */
  projectsV2Get3 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/projects/avatartoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Post2
   * @request POST:/api/accounts/{accountId}/projects/bulk
   * @originalName projectsV2Post
   * @duplicate
   * @response `200` `void` Success
   */
  projectsV2Post2 = (accountId: number, data: IDevartTimeTrackerModelsProjectsUpdate, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/projects/bulk`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportProjects
   * @name ReportProjectsGet
   * @request GET:/api/reports/summary/projects
   * @response `200` `(IDevartTimeTrackerModelsSummaryProjectReportRow)[]` Success
   */
  reportProjectsGet = (
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
    this.http.request<IDevartTimeTrackerModelsSummaryProjectReportRow[], any>({
      path: `/api/reports/summary/projects`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportProjects
   * @name ReportProjectsGet2
   * @summary Gets the summary projects report as CSV.
   * @request GET:/api/reports/summary/projects/csv
   * @originalName reportProjectsGet
   * @duplicate
   * @response `200` `void` Success
   */
  reportProjectsGet2 = (
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
      path: `/api/reports/summary/projects/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportProjects
   * @name ReportProjectsGet3
   * @summary Gets the summary projects report as PDF.
   * @request GET:/api/reports/summary/projects/pdf
   * @originalName reportProjectsGet
   * @duplicate
   * @response `200` `void` Success
   */
  reportProjectsGet3 = (
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
      path: `/api/reports/summary/projects/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
}
