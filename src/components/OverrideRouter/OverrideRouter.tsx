import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppState} from '../../redux/types';
import {HOME_PATH, LOGIN_PATH} from '../../types/appConstants';

interface Props {
  loggedIn: boolean;
}

class OverrideRouter extends React.Component<Props> {
  render() {
    const {loggedIn} = this.props;

    if (!loggedIn) {
      return <Redirect to={LOGIN_PATH} />;
    } else {
      return <Redirect to={HOME_PATH} />;
    }
  }
}

const mapStateToProps = (state: AppState) => ({loggedIn: state.loggedIn});

export default connect(mapStateToProps)(OverrideRouter);
