import axios from "axios";
import { find } from "lodash";
import { getTasksUrlWithId, TASKS_URL } from "../../types/appConstants";
import { Task } from "../../types/tasks";
import { RECEIVE_TASKS } from "./actionTypes";
import { updateTask } from "./services";

const receiveTasksAction = (tasks: Task[]) => ({type: RECEIVE_TASKS, tasks});

export const getTasksAction = () => async (dispatch: any) => {
  const response = await axios.get(TASKS_URL);
  dispatch(receiveTasksAction(response.data));
};

export const updateTaskAction = (tasks: Task[], id: string) => async (dispatch: any) => {
  const taskToUpdate = find(tasks, { id });
  await axios.put(getTasksUrlWithId(id), taskToUpdate, { headers: {'Content-Type': 'application/json'}});
  const newTasks: Task[] = updateTask(taskToUpdate, tasks);
  dispatch(receiveTasksAction(newTasks));
};
