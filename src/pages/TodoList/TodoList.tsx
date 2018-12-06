import {List} from '@material-ui/core';
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TodoItem} from '../../components/TodoItem/TodoItem';
import {getTasksAction} from '../../redux/actions/taskActions';
import {AppState} from '../../redux/types';
import {Tasks} from '../../types/tasks';

interface Props {
  tasks: Tasks;
  getTasks: any;
}

class TodoList extends React.Component<Props> {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    const {tasks} = this.props;

    return (
      <List>
        {Object.keys(tasks).map(id => (
          <TodoItem task={tasks[id]} key={id} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state: AppState) => ({tasks: state.tasks});

const mapDispatchToProps = (dispatch: any) => ({
  getTasks: bindActionCreators(getTasksAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
