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
  IDevartTimeTrackerModelsAccount,
  IDevartTimeTrackerModelsAccountMember,
  IDevartTimeTrackerModelsAccountScope,
  IDevartTimeTrackerModelsActivityReportRow,
  IDevartTimeTrackerModelsApproverGroup,
  IDevartTimeTrackerModelsAppsUsageReportRow,
  IDevartTimeTrackerModelsClient,
  IDevartTimeTrackerModelsCultureInfoLite,
  IDevartTimeTrackerModelsCurrencyInfo,
  IDevartTimeTrackerModelsDetailedReportRow,
  IDevartTimeTrackerModelsIntegration,
  IDevartTimeTrackerModelsInvoice,
  IDevartTimeTrackerModelsInvoiceRange,
  IDevartTimeTrackerModelsInvoicesInvoiceStatusFilter,
  IDevartTimeTrackerModelsJobType,
  IDevartTimeTrackerModelsProject,
  IDevartTimeTrackerModelsProjectLite,
  IDevartTimeTrackerModelsProjectsUpdate,
  IDevartTimeTrackerModelsScheduledJob,
  IDevartTimeTrackerModelsSummaryProjectReportRow,
  IDevartTimeTrackerModelsSummaryStaffReportRow,
  IDevartTimeTrackerModelsTaskReportRow,
  IDevartTimeTrackerModelsTimelineEntry,
  IDevartTimeTrackerModelsTimeZoneInfoLite,
  IDevartTimeTrackerModelsUserGroup,
  IDevartTimeTrackerModelsUserProfile,
  IDevartTimeTrackerModelsWebToolIssueTimer,
  ITimeTrackerDomainModelsProjectBillingFilter,
  ITimeTrackerDomainModelsProjectBudgetFilter,
  ITimeTrackerDomainModelsProjectStatusFilter,
  ITMetricAccountsDomainModelsAccessTokenReponse,
  ITMetricAccountsViewModelsV2Account,
  ITMetricAccountsViewModelsV2AccountMember,
  ITMetricAccountsViewModelsV2UserProfile,
  ITMetricTagsDomainModelsTag,
  ITMetricTimeEntriesDomainModelsGroupTimeEntries,
  ITMetricTimeEntriesDomainModelsRecentWorkTaskLegacy,
  ITMetricTimeEntriesDomainModelsTimeEntry,
  ITMetricTimeOffDomainModelsBalanceMovement,
  ITMetricTimeOffDomainModelsTimeOffBalance,
  ITMetricTimeOffDomainModelsTimeOffPolicy,
  ITMetricTimeOffDomainModelsTimeOffRequest,
  ITMetricTimeOffDomainModelsTimeOffRequestStatus,
  ITMetricTimeOffViewModelsTimeOffRequestResolution,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Api<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AccountMembers
   * @name AccountMembersGet
   * @summary Gets the members of the specified account.
   * @request GET:/api/accounts/{accountId}/members
   */
  accountMembersGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccountMember[], any>({
      path: `/api/accounts/${accountId}/members`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AccountMembers
   * @name AccountMembersPost
   * @summary Adds one member to account
   * @request POST:/api/accounts/{accountId}/members
   */
  accountMembersPost = (accountId: string, data: IDevartTimeTrackerModelsAccountMember, query?: { recaptcha?: string }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/members`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AccountMembers
   * @name AccountMembersGet2
   * @summary Gets specific account member
   * @request GET:/api/accounts/{accountId}/members/{accountMemberId}
   * @originalName accountMembersGet
   * @duplicate
   */
  accountMembersGet2 = (accountId: number, accountMemberId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricAccountsViewModelsV2AccountMember, any>({
      path: `/api/accounts/${accountId}/members/${accountMemberId}`,
      method: 'GET',
      format: 'json',
      ...params,
    }); /**
 * No description
 * 
 * @tags AccountMembers
 * @name AccountMembersPut
 * @summary Puts the account member.
User with member rights can only lock himself.
 * @request PUT:/api/accounts/{accountId}/members/{accountMemberId}
 */
  accountMembersPut = (accountId: number, accountMemberId: string, data: ITMetricAccountsViewModelsV2AccountMember, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/members/${accountMemberId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AccountMembers
   * @name AccountMembersDelete
   * @summary Deletes account member
   * @request DELETE:/api/accounts/{accountId}/members/{accountMemberId}
   */
  accountMembersDelete = (accountId: number, accountMemberId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/members/${accountMemberId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags AccountMembers
   * @name AccountMembersPost2
   * @summary Invites new members to account
   * @request POST:/api/accounts/{accountId}/members/bulk
   * @originalName accountMembersPost
   * @duplicate
   */
  accountMembersPost2 = (accountId: number, data: IDevartTimeTrackerModelsAccountMember[], query?: { recaptcha?: string }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccountMember[], any>({
      path: `/api/accounts/${accountId}/members/bulk`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsPost
   * @summary Creates account
   * @request POST:/api/accounts
   */
  accountsPost = (data: IDevartTimeTrackerModelsAccount, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccount, any>({
      path: `/api/accounts`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet
   * @summary Gets account
   * @request GET:/api/accounts/{accountId}
   */
  accountsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricAccountsViewModelsV2Account, any>({
      path: `/api/accounts/${accountId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsPut
   * @summary Edits account
   * @request PUT:/api/accounts/{accountId}
   */
  accountsPut = (accountId: number, data: ITMetricAccountsViewModelsV2Account, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsDelete
   * @summary Deletes account
   * @request DELETE:/api/accounts/{accountId}
   */
  accountsDelete = (accountId: number, query?: { reason?: string }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}`,
      method: 'DELETE',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet2
   * @request GET:/api/accounts/{accountId}/logotoken
   * @originalName accountsGet
   * @duplicate
   */
  accountsGet2 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/logotoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet3
   * @summary Gets account scope
   * @request GET:/api/accounts/{accountId}/scope
   * @originalName accountsGet
   * @duplicate
   */
  accountsGet3 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccountScope, any>({
      path: `/api/accounts/${accountId}/scope`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name AccountsGet4
   * @summary Gets currencies list for account
   * @request GET:/api/accounts/currencies
   * @originalName accountsGet
   * @duplicate
   */
  accountsGet4 = (params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsCurrencyInfo[], any>({
      path: `/api/accounts/currencies`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Activity
   * @name ActivityDelete
   * @request DELETE:/api/accounts/{accountId}/activity/{userProfileId}
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
   * @tags ApiVersion
   * @name ApiVersionGet
   * @summary Get api version
   * @request GET:/api/version
   */
  apiVersionGet = (params: RequestParams = {}) =>
    this.http.request<number, any>({
      path: `/api/version`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsGet
   * @summary Gets all clients visible for current member in specific account.
   * @request GET:/api/accounts/{accountId}/clients
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
   */
  clientsGet3 = (accountId: number, params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/accounts/${accountId}/clients/avatartoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DemoData
   * @name DemoDataPost
   * @summary Generates demo data
   * @request POST:/api/demodata/{accountId}
   */
  demoDataPost = (accountId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/demodata/${accountId}`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags DemoData
   * @name DemoDataDelete
   * @summary Deletes demo data
   * @request DELETE:/api/demodata/{accountId}
   */
  demoDataDelete = (accountId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/demodata/${accountId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Integrations
   * @name IntegrationsGet
   * @summary Gets integrations list
   * @request GET:/api/accounts/{accountId}/integrations
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
   */
  integrationsDelete2 = (accountId: number, integrationId: number, query?: { syncType?: IDevartTimeTrackerModelsJobType }, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/integrations/sync/${integrationId}`,
      method: 'DELETE',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesGet
   * @summary Gets invoices list
   * @request GET:/api/accounts/{accountId}/invoices
   */
  invoicesGet = (
    accountId: number,
    query?: { StartDate?: string; EndDate?: string; ClientList?: number[]; Status?: IDevartTimeTrackerModelsInvoicesInvoiceStatusFilter },
    params: RequestParams = {},
  ) =>
    this.http.request<IDevartTimeTrackerModelsInvoice[], any>({
      path: `/api/accounts/${accountId}/invoices`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesPost
   * @summary Creates new invoice with specific date range
   * @request POST:/api/accounts/{accountId}/invoices
   */
  invoicesPost = (accountId: number, data: IDevartTimeTrackerModelsInvoiceRange, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsInvoice, any>({
      path: `/api/accounts/${accountId}/invoices`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesGet2
   * @summary Gets specific invoice
   * @request GET:/api/accounts/{accountId}/invoices/{invoiceId}
   * @originalName invoicesGet
   * @duplicate
   */
  invoicesGet2 = (accountId: number, invoiceId: number, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsInvoice, any>({
      path: `/api/accounts/${accountId}/invoices/${invoiceId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesPut
   * @summary Edits invoice
   * @request PUT:/api/accounts/{accountId}/invoices/{invoiceId}
   */
  invoicesPut = (accountId: number, invoiceId: number, data: IDevartTimeTrackerModelsInvoice, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/invoices/${invoiceId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesDelete
   * @summary Deletes invoice
   * @request DELETE:/api/accounts/{accountId}/invoices/{invoiceId}
   */
  invoicesDelete = (accountId: number, invoiceId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/invoices/${invoiceId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesGet3
   * @summary Exports invoice to xlsx
   * @request GET:/api/accounts/{accountId}/invoices/{invoiceId}/xlsx
   * @originalName invoicesGet
   * @duplicate
   */
  invoicesGet3 = (accountId: number, invoiceId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/invoices/${invoiceId}/xlsx`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesPut2
   * @summary Marks as invoiced/uninvoiced
   * @request PUT:/api/accounts/{accountId}/invoices/mark
   * @originalName invoicesPut
   * @duplicate
   */
  invoicesPut2 = (
    accountId: number,
    data: boolean,
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
      path: `/api/accounts/${accountId}/invoices/mark`,
      method: 'PUT',
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesGet4
   * @summary Gets projects for new invoice by client and time range
   * @request GET:/api/accounts/{accountId}/invoices/projects
   * @originalName invoicesGet
   * @duplicate
   */
  invoicesGet4 = (accountId: number, query?: { clientId?: number; StartTime?: string; EndTime?: string }, params: RequestParams = {}) =>
    this.http.request<number[], any>({
      path: `/api/accounts/${accountId}/invoices/projects`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ProjectsV2
   * @name ProjectsV2Get
   * @summary Gets the all projects visible for current member.
   * @request GET:/api/accounts/{accountId}/projects
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
   * @tags RecentTasksLegacy
   * @name RecentTasksLegacyGet
   * @summary Gets recent tasks
   * @request GET:/api/accounts/{accountId}/timeentries/recent
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
   * @tags ReportActivity
   * @name ReportActivityGet
   * @summary Gets the summary activity report.
   * @request GET:/api/reports/summary/activity
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
  /**
   * No description
   *
   * @tags ReportAppsUsage
   * @name ReportAppsUsageGet
   * @summary Gets the summary activity report.
   * @request GET:/api/reports/appsusage
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
    this.http.request<IDevartTimeTrackerModelsAppsUsageReportRow[], any>({
      path: `/api/reports/appsusage`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportAppsUsage
   * @name ReportAppsUsageGet2
   * @summary Gets the summary activity report as CSV.
   * @request GET:/api/reports/appsusage/csv
   * @originalName reportAppsUsageGet
   * @duplicate
   */
  reportAppsUsageGet2 = (
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
      path: `/api/reports/appsusage/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportAppsUsage
   * @name ReportAppsUsageGet3
   * @summary Gets the summary activity report as PDF.
   * @request GET:/api/reports/appsusage/pdf
   * @originalName reportAppsUsageGet
   * @duplicate
   */
  reportAppsUsageGet3 = (
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
   * @summary Gets the detailed report.
   * @request GET:/api/reports/detailed
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
    this.http.request<IDevartTimeTrackerModelsDetailedReportRow[], any>({
      path: `/api/reports/detailed`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportDetailed
   * @name ReportDetailedGet2
   * @summary Gets the detailed report as CSV.
   * @request GET:/api/reports/detailed/csv
   * @originalName reportDetailedGet
   * @duplicate
   */
  reportDetailedGet2 = (
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
      path: `/api/reports/detailed/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportDetailed
   * @name ReportDetailedGet3
   * @summary Gets the detailed report as PDF.
   * @request GET:/api/reports/detailed/pdf
   * @originalName reportDetailedGet
   * @duplicate
   */
  reportDetailedGet3 = (
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
  /**
   * No description
   *
   * @tags ReportLongTimers
   * @name ReportLongTimersGet
   * @summary Gets the long timers report.
   * @request GET:/api/reports/longtimers
   */
  reportLongTimersGet = (
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
    this.http.request<IDevartTimeTrackerModelsUserProfile[], any>({
      path: `/api/reports/longtimers`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportProjects
   * @name ReportProjectsGet
   * @request GET:/api/reports/summary/projects
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
  /**
   * No description
   *
   * @tags ReportTasks
   * @name ReportTasksGet
   * @summary Gets the tasks report.
   * @request GET:/api/reports/summary/tasks
   */
  reportTasksGet = (
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
    this.http.request<IDevartTimeTrackerModelsTaskReportRow[], any>({
      path: `/api/reports/summary/tasks`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportTasks
   * @name ReportTasksGet2
   * @summary Gets the tasks report as CSV.
   * @request GET:/api/reports/summary/tasks/csv
   * @originalName reportTasksGet
   * @duplicate
   */
  reportTasksGet2 = (
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
      path: `/api/reports/summary/tasks/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportTasks
   * @name ReportTasksGet3
   * @summary Gets the tasks report as PDF.
   * @request GET:/api/reports/summary/tasks/pdf
   * @originalName reportTasksGet
   * @duplicate
   */
  reportTasksGet3 = (
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
      path: `/api/reports/summary/tasks/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportTeam
   * @name ReportTeamGet
   * @summary Gets the summary staff report.
   * @request GET:/api/reports/summary/staff
   */
  reportTeamGet = (
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
    this.http.request<IDevartTimeTrackerModelsSummaryStaffReportRow[], any>({
      path: `/api/reports/summary/staff`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportTeam
   * @name ReportTeamGet2
   * @summary Gets the summary staff report as CSV.
   * @request GET:/api/reports/summary/staff/csv
   * @originalName reportTeamGet
   * @duplicate
   */
  reportTeamGet2 = (
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
      path: `/api/reports/summary/staff/csv`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ReportTeam
   * @name ReportTeamGet3
   * @summary Gets the summary staff report as PDF.
   * @request GET:/api/reports/summary/staff/pdf
   * @originalName reportTeamGet
   * @duplicate
   */
  reportTeamGet3 = (
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
      path: `/api/reports/summary/staff/pdf`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsGet
   * @summary Gets tags list
   * @request GET:/api/accounts/{accountId}/tags
   */
  tagsGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag[], any>({
      path: `/api/accounts/${accountId}/tags`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsPost
   * @summary Creates tag
   * @request POST:/api/accounts/{accountId}/tags
   */
  tagsPost = (accountId: number, data: ITMetricTagsDomainModelsTag, params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag, any>({
      path: `/api/accounts/${accountId}/tags`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsPut
   * @summary Edits tag
   * @request PUT:/api/accounts/{accountId}/tags/{tagId}
   */
  tagsPut = (accountId: number, tagId: number, data: ITMetricTagsDomainModelsTag, params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag, any>({
      path: `/api/accounts/${accountId}/tags/${tagId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsDelete
   * @summary Deletes tag or worktype
   * @request DELETE:/api/accounts/{accountId}/tags/{tagId}
   */
  tagsDelete = (accountId: number, tagId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/tags/${tagId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsPost2
   * @summary Creates multiple tags
   * @request POST:/api/accounts/{accountId}/tags/bulk
   * @originalName tagsPost
   * @duplicate
   */
  tagsPost2 = (accountId: number, data: ITMetricTagsDomainModelsTag[], params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag[], any>({
      path: `/api/accounts/${accountId}/tags/bulk`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tags
   * @name TagsGet2
   * @summary Gets work type by id
   * @request GET:/api/accounts/{accountId}/tags/worktypes/{tagId}
   * @originalName tagsGet
   * @duplicate
   */
  tagsGet2 = (accountId: number, tagId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag, any>({
      path: `/api/accounts/${accountId}/tags/worktypes/${tagId}`,
      method: 'GET',
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
   */
  timeEntriesGet3 = (accountId: number, userGroupId: number, query?: { StartTime?: string; EndTime?: string; useUtcTime?: boolean }, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeEntriesDomainModelsGroupTimeEntries[], any>({
      path: `/api/accounts/${accountId}/timeentries/group/${userGroupId}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Timeline
   * @name TimelineGet
   * @summary Gets timeline entries
   * @request GET:/api/timeline/{accountId}
   */
  timelineGet = (accountId: number, query?: { userProfileId?: number; StartTime?: string; EndTime?: string; useUtcTime?: boolean }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsTimelineEntry[], any>({
      path: `/api/timeline/${accountId}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Timeline
   * @name TimelinePost
   * @summary Creates timeline entries
   * @request POST:/api/timeline/{accountId}
   */
  timelinePost = (accountId: number, data: IDevartTimeTrackerModelsTimelineEntry[], params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/timeline/${accountId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffBalances
   * @name TimeOffBalancesGet
   * @request GET:/api/accounts/{accountId}/timeoff/balances
   */
  timeOffBalancesGet = (
    accountId: number,
    query?: {
      PolicyList?: number[];
      StatusList?: ITMetricTimeOffDomainModelsTimeOffRequestStatus[];
      AccountId?: number;
      ProfileList?: number[];
      GroupList?: number[];
      StartDate?: string;
      EndDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffBalance[], any>({
      path: `/api/accounts/${accountId}/timeoff/balances`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffBalances
   * @name TimeOffBalancesGet2
   * @request GET:/api/accounts/{accountId}/timeoff/balances/movements
   * @originalName timeOffBalancesGet
   * @duplicate
   */
  timeOffBalancesGet2 = (accountId: number, query?: { userProfileId?: number; timeOffPolicyId?: number; endDate?: string }, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsBalanceMovement[], any>({
      path: `/api/accounts/${accountId}/timeoff/balances/movements`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffPolicies
   * @name TimeOffPoliciesGet
   * @request GET:/api/accounts/{accountId}/timeoff/policies
   */
  timeOffPoliciesGet = (accountId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffPolicy[], any>({
      path: `/api/accounts/${accountId}/timeoff/policies`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffPolicies
   * @name TimeOffPoliciesPost
   * @request POST:/api/accounts/{accountId}/timeoff/policies
   */
  timeOffPoliciesPost = (accountId: number, data: ITMetricTimeOffDomainModelsTimeOffPolicy, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffPolicy, any>({
      path: `/api/accounts/${accountId}/timeoff/policies`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffPolicies
   * @name TimeOffPoliciesGet2
   * @request GET:/api/accounts/{accountId}/timeoff/policies/{timeOffPolicyId}
   * @originalName timeOffPoliciesGet
   * @duplicate
   */
  timeOffPoliciesGet2 = (accountId: number, timeOffPolicyId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffPolicy, any>({
      path: `/api/accounts/${accountId}/timeoff/policies/${timeOffPolicyId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffPolicies
   * @name TimeOffPoliciesPut
   * @request PUT:/api/accounts/{accountId}/timeoff/policies/{timeOffPolicyId}
   */
  timeOffPoliciesPut = (timeOffPolicyId: number, accountId: string, data: ITMetricTimeOffDomainModelsTimeOffPolicy, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffPolicy, any>({
      path: `/api/accounts/${accountId}/timeoff/policies/${timeOffPolicyId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffPolicies
   * @name TimeOffPoliciesDelete
   * @request DELETE:/api/accounts/{accountId}/timeoff/policies/{timeOffPolicyId}
   */
  timeOffPoliciesDelete = (accountId: number, timeOffPolicyId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timeoff/policies/${timeOffPolicyId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsGet
   * @request GET:/api/accounts/{accountId}/timeoff/requests
   */
  timeOffRequestsGet = (
    accountId: number,
    query?: {
      PolicyList?: number[];
      StatusList?: ITMetricTimeOffDomainModelsTimeOffRequestStatus[];
      AccountId?: number;
      ProfileList?: number[];
      GroupList?: number[];
      StartDate?: string;
      EndDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffRequest[], any>({
      path: `/api/accounts/${accountId}/timeoff/requests`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsPost
   * @request POST:/api/accounts/{accountId}/timeoff/requests
   */
  timeOffRequestsPost = (accountId: number, data: ITMetricTimeOffDomainModelsTimeOffRequest, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffRequest, any>({
      path: `/api/accounts/${accountId}/timeoff/requests`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsGet2
   * @request GET:/api/accounts/{accountId}/timeoff/requests/{timeOffRequestId}
   * @originalName timeOffRequestsGet
   * @duplicate
   */
  timeOffRequestsGet2 = (accountId: number, timeOffRequestId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffRequest, any>({
      path: `/api/accounts/${accountId}/timeoff/requests/${timeOffRequestId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsPut
   * @request PUT:/api/accounts/{accountId}/timeoff/requests/{timeOffRequestId}
   */
  timeOffRequestsPut = (accountId: number, timeOffRequestId: string, data: ITMetricTimeOffDomainModelsTimeOffRequest, params: RequestParams = {}) =>
    this.http.request<ITMetricTimeOffDomainModelsTimeOffRequest, any>({
      path: `/api/accounts/${accountId}/timeoff/requests/${timeOffRequestId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsDelete
   * @request DELETE:/api/accounts/{accountId}/timeoff/requests/{timeOffRequestId}
   */
  timeOffRequestsDelete = (accountId: number, timeOffRequestId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timeoff/requests/${timeOffRequestId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsPut2
   * @request PUT:/api/accounts/{accountId}/timeoff/requests/{timeOffRequestId}/resolution
   * @originalName timeOffRequestsPut
   * @duplicate
   */
  timeOffRequestsPut2 = (accountId: number, timeOffRequestId: number, data: ITMetricTimeOffViewModelsTimeOffRequestResolution, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timeoff/requests/${timeOffRequestId}/resolution`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TimeOffRequests
   * @name TimeOffRequestsGet3
   * @request GET:/api/accounts/{accountId}/timeoff/requests/approvers
   * @originalName timeOffRequestsGet
   * @duplicate
   */
  timeOffRequestsGet3 = (accountId: number, query?: { requesterId?: number }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsApproverGroup[], any>({
      path: `/api/accounts/${accountId}/timeoff/requests/approvers`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TimerV2
   * @name TimerV2Post
   * @summary Creates timer from issue
   * @request POST:/api/accounts/{accountId}/timer/issue
   */
  timerV2Post = (accountId: number, data: IDevartTimeTrackerModelsWebToolIssueTimer, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/timer/issue`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags UserGroups
   * @name UserGroupsGet
   * @summary Gets team list for current account
   * @request GET:/api/accounts/{accountId}/usergroups
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
   */
  userGroupsDelete = (accountId: number, userGroupId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/accounts/${accountId}/usergroups/${userGroupId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet
   * @summary Gets user profile
   * @request GET:/api/userprofile
   */
  userProfileGet = (params: RequestParams = {}) =>
    this.http.request<ITMetricAccountsViewModelsV2UserProfile, any>({
      path: `/api/userprofile`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description You can edit user profile, if it exists in database. Otherwise, 400 error (Bad Request) will be returned.
   *
   * @tags UserProfile
   * @name UserProfilePut
   * @summary Edits user profile
   * @request PUT:/api/userprofile
   */
  userProfilePut = (data: IDevartTimeTrackerModelsUserProfile, query?: { dryRun?: boolean }, params: RequestParams = {}) =>
    this.http.request<void, void>({
      path: `/api/userprofile`,
      method: 'PUT',
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfilePost
   * @summary Generates user profile after registration on Identity. To add new members you should use /api/accounts/{id}/members/bulk.
   * @request POST:/api/userprofile
   */
  userProfilePost = (data: IDevartTimeTrackerModelsUserProfile, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsUserProfile, any>({
      path: `/api/userprofile`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileDelete
   * @summary Deletes user profile from forum, identity and application
   * @request DELETE:/api/userprofile
   */
  userProfileDelete = (params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/userprofile`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet2
   * @summary Gets user time zone info on specified or current date
   * @request GET:/api/userprofile/{userProfileId}/timezone
   * @originalName userProfileGet
   * @duplicate
   */
  userProfileGet2 = (userProfileId: number, query?: { date?: string }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsTimeZoneInfoLite, void>({
      path: `/api/userprofile/${userProfileId}/timezone`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet3
   * @summary Gets the list of accounts that are available for the user. This endpoint is used by a Zapier trigger.
   * @request GET:/api/userprofile/accounts
   * @originalName userProfileGet
   * @duplicate
   */
  userProfileGet3 = (params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsAccount[], any>({
      path: `/api/userprofile/accounts`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet4
   * @request GET:/api/userprofile/avatartoken
   * @originalName userProfileGet
   * @duplicate
   */
  userProfileGet4 = (params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/api/userprofile/avatartoken`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet5
   * @request GET:/api/userprofile/cultures
   * @originalName userProfileGet
   * @duplicate
   */
  userProfileGet5 = (params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsCultureInfoLite[], any>({
      path: `/api/userprofile/cultures`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfilePost2
   * @summary Resends email to verify current user
   * @request POST:/api/userprofile/resend
   * @originalName userProfilePost
   * @duplicate
   */
  userProfilePost2 = (params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/userprofile/resend`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet6
   * @summary Gets time zones list
   * @request GET:/api/userprofile/timezones
   * @originalName userProfileGet
   * @duplicate
   */
  userProfileGet6 = (query?: { culture?: string }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsTimeZoneInfoLite[], any>({
      path: `/api/userprofile/timezones`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    }); /**
 * No description
 * 
 * @tags UserProfile
 * @name UserProfilePost3
 * @summary Requests an access token for the user. The token is valid for 1 year.
If you request another token, the previous token is invalidated.
 * @request POST:/api/userprofile/token
 * @originalName userProfilePost
 * @duplicate
 */
  userProfilePost3 = (params: RequestParams = {}) =>
    this.http.request<ITMetricAccountsDomainModelsAccessTokenReponse, any>({
      path: `/api/userprofile/token`,
      method: 'POST',
      format: 'json',
      ...params,
    });
}
