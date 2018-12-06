import axios from 'axios';
import {find} from 'lodash';
import {getTasksUrlWithId, TASKS_URL} from '../../types/appConstants';
import {Tasks} from '../../types/tasks';
import {RECEIVE_TASKS} from './actionTypes';
import {updateTask} from './services';

const receiveTasksAction = (tasks: Tasks) => ({type: RECEIVE_TASKS, tasks});

export const getTasksAction = () => async (dispatch: any): Promise<void> => {
  const response = await axios.get(TASKS_URL);
  dispatch(receiveTasksAction(response.data));
};

export const updateTaskAction = (tasks: Tasks, id: string) => async (
  dispatch: any
): Promise<void> => {
  const taskToUpdate = find(tasks, {id});
  await axios.put(getTasksUrlWithId(id), taskToUpdate, {
    headers: {'Content-Type': 'application/json'},
  });
  const newTasks: Tasks = updateTask(taskToUpdate, tasks);
  dispatch(receiveTasksAction(newTasks));
};
