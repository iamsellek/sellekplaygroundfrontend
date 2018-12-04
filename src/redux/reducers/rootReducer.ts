import { FETCH_TASKS, RECEIVE_TASKS } from "../actions/actionTypes";
import initialState from "./initialState";

const rootReducer = (state = initialState, action: any) => {
  let newState;

  switch (action.type) {
    case FETCH_TASKS:
      return action;
    case RECEIVE_TASKS:
      newState = {...state, tasks: action.tasks};
      return newState;
    default:
      return state;
  }
};

export default rootReducer;