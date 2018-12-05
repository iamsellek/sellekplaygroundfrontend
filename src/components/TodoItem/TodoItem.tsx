import {Checkbox, ListItem, ListItemText} from '@material-ui/core';
import * as React from 'react';
import {Task} from '../../types/tasks';
import {toggleTask} from './services';

interface Props {
  task: Task;
}

export class TodoItem extends React.Component<Props, {}> {
  render() {
    const {task} = this.props;

    return (
      <ListItem
        button
        onClick={() => {
          toggleTask(task);
        }}
      >
        <Checkbox checked={task.done} />
        <ListItemText primary={task.name} secondary={task.description} />
      </ListItem>
    );
  }
}
