import { cloneDeep, remove } from "lodash";
import { Task } from "../../types/tasks";

export const updateTask = (task: Task | undefined, allTasks: Task[]) => {
  if (!task) {
    return allTasks;
  }

  const allTasksClone = cloneDeep(allTasks);
  const taskToUpdate = remove(allTasksClone, { id: task.id })[0];
  const newTask = {...taskToUpdate, ...task};

  return [...allTasksClone, newTask];
}