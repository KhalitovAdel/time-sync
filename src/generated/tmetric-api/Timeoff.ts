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
  IDevartTimeTrackerModelsApproverGroup,
  ITMetricTimeOffDomainModelsBalanceMovement,
  ITMetricTimeOffDomainModelsTimeOffBalance,
  ITMetricTimeOffDomainModelsTimeOffPolicy,
  ITMetricTimeOffDomainModelsTimeOffRequest,
  ITMetricTimeOffDomainModelsTimeOffRequestStatus,
  ITMetricTimeOffViewModelsTimeOffRequestResolution,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Timeoff<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TimeOffBalances
   * @name TimeOffBalancesGet
   * @request GET:/api/accounts/{accountId}/timeoff/balances
   * @response `200` `(ITMetricTimeOffDomainModelsTimeOffBalance)[]` Success
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
   * @response `200` `(ITMetricTimeOffDomainModelsBalanceMovement)[]` Success
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
   * @response `200` `(ITMetricTimeOffDomainModelsTimeOffPolicy)[]` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffPolicy` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffPolicy` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffPolicy` Success
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
   * @response `200` `void` Success
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
   * @response `200` `(ITMetricTimeOffDomainModelsTimeOffRequest)[]` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffRequest` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffRequest` Success
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
   * @response `200` `ITMetricTimeOffDomainModelsTimeOffRequest` Success
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
   * @response `200` `void` Success
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
   * @response `200` `void` Success
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
   * @response `200` `(IDevartTimeTrackerModelsApproverGroup)[]` Success
   */
  timeOffRequestsGet3 = (accountId: number, query?: { requesterId?: number }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsApproverGroup[], any>({
      path: `/api/accounts/${accountId}/timeoff/requests/approvers`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
