import axios, {AxiosRequestConfig} from 'axios';
import store from '../index';
import {LOG_OUT} from './actionTypes';

export interface AxiosOptions {
  data?: any;
  config?: AxiosRequestConfig;
}

export const makeCall = async (
  method: string,
  url: string,
  options: AxiosOptions
) => {
  try {
    const response = options.data
      ? await axios[method](url, options.data, options.config)
      : await axios[method](url, options.config);

    return response;
  } catch (err) {
    if (err.response.status === 401) {
      store.dispatch({type: LOG_OUT});
    }

    throw err;
  }
};
