import store from "../../redux";
import { updateTaskAction } from "../../redux/actions/taskActions";
import { Task } from "../../types/tasks";

export const toggleTask = (task: Task) => {
  task.done = !task.done;
  store.dispatch(updateTaskAction(store.getState().tasks, task.id));
}