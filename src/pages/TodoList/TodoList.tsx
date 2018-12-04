import { List } from "@material-ui/core";
import * as React from "react";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { Task } from "../../types/tasks";

interface Props {
  tasks: Task[];
}

export const TodoList: React.SFC<Props> = ({tasks}) => 
  (<List>
    {tasks.map(task => (
      <TodoItem task={task} key={task.id} />
    ))}
  </List>);