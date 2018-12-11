import {LOGIN_URL} from '../../../types/appConstants';
import {FAILED_LOGIN, GET_TOKEN, SUCCESSFUL_LOGIN} from '../actionTypes';
import {makeCall} from '../services';
import {getAuthToken, storeAuthToken} from './services';

const receiveAuthTokenAction = (token: string) => ({type: GET_TOKEN, token});

export const getAuthTokenAction = () => async (dispatch: any) => {
  const token = await getAuthToken();
  dispatch(receiveAuthTokenAction(token));
};

export const makeLoginCallAction = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    const response = await makeCall('post', LOGIN_URL, {
      data: {email, password},
    });
    await storeAuthToken(response.data.user.token);
    dispatch({type: SUCCESSFUL_LOGIN});
  } catch (err) {
    let message = '';

    if (err.response && err.response.data) {
      message = err.response.data;
    } else {
      message = err.toString();
    }

    dispatch({
      type: FAILED_LOGIN,
      message,
    });
  }
};
