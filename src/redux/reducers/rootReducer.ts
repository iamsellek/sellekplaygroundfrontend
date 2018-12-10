import {GET_TOKEN, RECEIVE_TASKS} from '../actions/actionTypes';
import initialState from './initialState';

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        loggedIn: !!action.token,
      };
    case RECEIVE_TASKS:
      return {...state, tasks: action.tasks};
    default:
      return state;
  }
};

export default rootReducer;
