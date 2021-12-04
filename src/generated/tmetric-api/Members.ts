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

import { IDevartTimeTrackerModelsAccountMember, ITMetricAccountsViewModelsV2AccountMember } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Members<SecurityDataType = unknown> {
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
   * @response `200` `(IDevartTimeTrackerModelsAccountMember)[]` Success
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
   * @response `200` `void` Success
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
   * @response `200` `ITMetricAccountsViewModelsV2AccountMember` Success
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
 * @response `200` `void` Success
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
   * @response `200` `void` Success
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
   * @response `200` `(IDevartTimeTrackerModelsAccountMember)[]` Success
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
}
