import { AxiosInterceptorManager } from 'axios';
type callBacks<T> = Parameters<AxiosInterceptorManager<T>['use']>;

export interface HttpInterceptor<T> {
  intercept: callBacks<T>[0];

  handleError?: callBacks<T>[1];
}
