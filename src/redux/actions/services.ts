import { Task, Tasks } from "../../types/tasks";

export const updateTask = (task: Task | undefined, allTasks: Tasks) => {
  if (!task) {
    return allTasks;
  }

  return {...allTasks, [task.id]: task };
}