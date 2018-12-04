import { Checkbox, ListItem, ListItemText } from "@material-ui/core";
import * as React from "react";
import { Task } from "../../types/tasks";

interface Props {
  task: Task;
}

interface State {
  done: boolean;
  name: string;
  description: string | undefined;
}

export class TodoItem extends React.Component<Props, State> {
  public state = {
    done: this.props.task.done,
    name: this.props.task.name,
    description: this.props.task.description
  };

  render() {
    const {task} = this.props;

    return (
      <ListItem key={task.name} button>
        <Checkbox checked={task.done} />
        <ListItemText primary={task.name} secondary={task.description} />
      </ListItem>
    )
  }
}