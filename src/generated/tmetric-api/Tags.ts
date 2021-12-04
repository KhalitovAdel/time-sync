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

import { ITMetricTagsDomainModelsTag } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tags<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Tags
   * @name TagsGet
   * @summary Gets tags list
   * @request GET:/api/accounts/{accountId}/tags
   * @response `200` `(ITMetricTagsDomainModelsTag)[]` Success
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
   * @response `200` `ITMetricTagsDomainModelsTag` Success
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
   * @response `200` `ITMetricTagsDomainModelsTag` Success
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
   * @response `200` `void` Success
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
   * @response `200` `(ITMetricTagsDomainModelsTag)[]` Success
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
   * @response `200` `ITMetricTagsDomainModelsTag` Success
   */
  tagsGet2 = (accountId: number, tagId: number, params: RequestParams = {}) =>
    this.http.request<ITMetricTagsDomainModelsTag, any>({
      path: `/api/accounts/${accountId}/tags/worktypes/${tagId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
