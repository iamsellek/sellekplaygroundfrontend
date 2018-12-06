import * as React from 'react';
import {Redirect} from 'react-router';
import {LOGIN_PATH} from '../../types/appConstants';

class OverrideRouter extends React.Component<{}> {
  render() {
    return <Redirect to={LOGIN_PATH} />;
  }
}

export default OverrideRouter;
