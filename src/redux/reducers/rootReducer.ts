import {
  FAILED_LOGIN,
  GET_TOKEN,
  RECEIVE_TASKS,
  SUCCESSFUL_LOGIN,
} from '../actions/actionTypes';
import initialState from './initialState';

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        loggedIn: !!action.token,
      };
    case FAILED_LOGIN:
      return {
        ...state,
        errorMessage: action.message,
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    case RECEIVE_TASKS:
      return {...state, tasks: action.tasks};
    default:
      return state;
  }
};

export default rootReducer;
