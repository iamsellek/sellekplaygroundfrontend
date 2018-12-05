import {List} from '@material-ui/core';
import * as React from 'react';
import {TodoItem} from '../../components/TodoItem/TodoItem';
import {Tasks} from '../../types/tasks';

interface Props {
  tasks: Tasks;
}

export const TodoList: React.SFC<Props> = ({tasks}) => (
  <List>
    {Object.keys(tasks).map(id => (
      <TodoItem task={tasks[id]} key={id} />
    ))}
  </List>
);
