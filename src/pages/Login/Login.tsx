import {TextField} from '@material-ui/core';
import * as React from 'react';
import {LoginDiv} from './components';

interface State {
  email: string;
  password: string;
}

class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{width: '20%'}}>
        <form>
          <LoginDiv>
            <TextField fullWidth label="Email" />
          </LoginDiv>
          <LoginDiv>
            <TextField fullWidth type="password" label="Password" />
          </LoginDiv>
        </form>
      </div>
    );
  }
}

export default Login;
