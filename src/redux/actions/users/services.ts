import localforage from 'localforage';
import {JWT_TOKEN} from '../../../types/appConstants';

export const storeAuthToken = async (token: string) => {
  localforage.setItem(JWT_TOKEN, token);
};
