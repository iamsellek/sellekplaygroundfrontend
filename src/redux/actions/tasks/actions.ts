import axios from 'axios';
import {find} from 'lodash';
import {getTasksUrlWithId, TASKS_URL} from '../../../types/appConstants';
import {Tasks} from '../../../types/tasks';
import {RECEIVE_TASKS} from '../actionTypes';
import {getAuthToken} from '../users/services';
import {updateTask} from './services';

const receiveTasksAction = (tasks: Tasks) => ({type: RECEIVE_TASKS, tasks});

export const getTasksAction = () => async (dispatch: any): Promise<void> => {
  const token = await getAuthToken();
  const response = await axios.get(TASKS_URL, {
    headers: {authorization: token},
  });
  dispatch(receiveTasksAction(response.data));
};

export const updateTaskAction = (tasks: Tasks, id: string) => async (
  dispatch: any
): Promise<void> => {
  const taskToUpdate = find(tasks, {id});
  const token = await getAuthToken();
  await axios.put(getTasksUrlWithId(id), taskToUpdate, {
    headers: {'Content-Type': 'application/json', Authorization: token},
  });
  const newTasks: Tasks = updateTask(taskToUpdate, tasks);
  dispatch(receiveTasksAction(newTasks));
};
