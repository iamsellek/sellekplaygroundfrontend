import axios from 'axios';
import localforage from 'localforage';
import {JWT_TOKEN, LOGIN_URL} from '../../../types/appConstants';
import {FAILED_LOGIN, GET_TOKEN, SUCCESFUL_LOGIN} from '../actionTypes';

const receiveAuthToken = (token: string) => ({type: GET_TOKEN, token});

export const getAuthToken = () => async (dispatch: any) => {
  const token = (await localforage.getItem(JWT_TOKEN)) as string;
  dispatch(receiveAuthToken(token));
};

export const makeLoginCall = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    const response: any = await axios.post(LOGIN_URL, {email, password});
    dispatch({type: SUCCESFUL_LOGIN, user: response.user});
  } catch (err) {
    dispatch({type: FAILED_LOGIN, message: err.response.data});
  }
};
