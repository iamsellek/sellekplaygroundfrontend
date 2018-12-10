import localforage from 'localforage';
import {JWT_TOKEN} from '../../types/appConstants';
import {GET_TOKEN} from './actionTypes';

const receiveAuthToken = (token: string) => ({type: GET_TOKEN, token});

export const getAuthToken = () => async (dispatch: any) => {
  const token = (await localforage.getItem(JWT_TOKEN)) as string;
  dispatch(receiveAuthToken(token));
};
