import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TodoList } from './pages/TodoList/TodoList';
import { getTasksAction } from "./redux/actions/taskActions";
import { AppState } from "./redux/types";
import { Task } from './types/tasks';

interface Props {
  tasks: Task[];
  getTasks: any;
}

class App extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    const {tasks} = this.props;

    return <TodoList tasks={tasks} />
  };
}

const mapStateToProps = (state: AppState) => ({tasks: state.tasks});

const mapDispatchToProps = (dispatch: any) => ({getTasks: bindActionCreators(getTasksAction, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);
