import {Checkbox, ListItem, ListItemText} from '@material-ui/core';
import * as React from 'react';
import {Task} from '../../types/tasks';
import {toggleTask} from './services';

interface Props {
  task: Task;
}

export class TodoItem extends React.Component<Props, {}> {
  public state = {task: this.props.task};

  render() {
    const {task} = this.state;

    return (
      <ListItem
        button
        onClick={() => {
          const newTask = toggleTask(task);
          this.setState({task: newTask});
        }}
      >
        <Checkbox checked={task.done} />
        <ListItemText primary={task.name} secondary={task.description} />
      </ListItem>
    );
  }
}
