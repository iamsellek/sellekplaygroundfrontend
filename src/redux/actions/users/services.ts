import localforage from 'localforage';
import {JWT_TOKEN} from '../../../types/appConstants';

export const getAuthToken = async (): Promise<string> =>
  (await localforage.getItem(JWT_TOKEN)) as string;

export const storeAuthToken = async (token: string) => {
  localforage.setItem(JWT_TOKEN, token);
};

export const deleteAuthToken = async () => {
  localforage.removeItem(JWT_TOKEN);
};
