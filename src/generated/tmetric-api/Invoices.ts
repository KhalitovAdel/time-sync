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

import { IDevartTimeTrackerModelsInvoice, IDevartTimeTrackerModelsInvoiceRange, IDevartTimeTrackerModelsInvoicesInvoiceStatusFilter } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Invoices<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Invoices
   * @name InvoicesGet
   * @summary Gets invoices list
   * @request GET:/api/accounts/{accountId}/invoices
   * @response `200` `(IDevartTimeTrackerModelsInvoice)[]` Success
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
   * @response `200` `IDevartTimeTrackerModelsInvoice` Success
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
   * @response `200` `IDevartTimeTrackerModelsInvoice` Success
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
   * @response `200` `void` Success
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
   * @response `200` `void` Success
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
   * @response `200` `void` Success
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
   * @response `200` `void` Success
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
   * @response `200` `(number)[]` Success
   */
  invoicesGet4 = (accountId: number, query?: { clientId?: number; StartTime?: string; EndTime?: string }, params: RequestParams = {}) =>
    this.http.request<number[], any>({
      path: `/api/accounts/${accountId}/invoices/projects`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
