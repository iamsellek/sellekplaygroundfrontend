import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getAuthToken} from '../../redux/actions/userActions';
import {AppState} from '../../redux/types';
import {HOME_PATH, LOGIN_PATH} from '../../types/appConstants';

interface Props {
  loggedIn: boolean;
  getAuthToken: any;
}

class OverrideRouter extends React.Component<Props> {
  componentDidMount() {
    this.props.getAuthToken();
  }

  render() {
    const {loggedIn} = this.props;

    if (!loggedIn) {
      return <Redirect to={LOGIN_PATH} />;
    } else {
      return <Redirect to={HOME_PATH} />;
    }
  }
}

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAuthToken: bindActionCreators(getAuthToken, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverrideRouter);
