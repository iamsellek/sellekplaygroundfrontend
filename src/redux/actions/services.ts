import axios, {AxiosRequestConfig} from 'axios';

export interface AxiosOptions {
  data?: any;
  config?: AxiosRequestConfig;
}

export const makeCall = (method: string, url: string, options: AxiosOptions) =>
  options.data
    ? axios[method](url, options.data, options.config)
    : axios[method](url, options.config);
