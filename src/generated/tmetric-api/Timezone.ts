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

import { IDevartTimeTrackerModelsTimeZoneInfoLite } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Timezone<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserProfile
   * @name UserProfileGet
   * @summary Gets user time zone info on specified or current date
   * @request GET:/api/userprofile/{userProfileId}/timezone
   * @response `200` `IDevartTimeTrackerModelsTimeZoneInfoLite` Success
   * @response `404` `void` When userProfile not found in db
   */
  userProfileGet = (userProfileId: number, query?: { date?: string }, params: RequestParams = {}) =>
    this.http.request<IDevartTimeTrackerModelsTimeZoneInfoLite, void>({
      path: `/api/userprofile/${userProfileId}/timezone`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
