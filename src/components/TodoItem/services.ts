import store from '../../redux';
import {updateTaskAction} from '../../redux/actions/tasks/actions';
import {Task} from '../../types/tasks';

export const toggleTask = (task: Task): Task => {
  task.done = !task.done;
  store.dispatch(
    updateTaskAction({...store.getState().tasks, [task.id]: task}, task.id)
  );

  return task;
};
