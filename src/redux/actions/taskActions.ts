import axios from "axios";
import { TASKS_URL } from "../../types/appConstants";
import { Task } from "../../types/tasks";
import { RECEIVE_TASKS } from "./actionTypes";

export const receiveTasks = (tasks: Task[]) => ({type: RECEIVE_TASKS, tasks});

export const getTasks = () => async (dispatch: any): Promise<void> => {
  const response = await axios.get(TASKS_URL);
  dispatch(receiveTasks(response.data));
}