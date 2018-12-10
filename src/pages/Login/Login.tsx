import {Button, TextField} from '@material-ui/core';
import * as React from 'react';
import {LoginDiv} from './components';

interface State {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
}

class Login extends React.Component<{}, State> {
  state = {email: '', emailError: false, password: '', passwordError: false};

  handleEmailChange(email: string) {
    this.setState({email});
  }

  verifyEmail() {
    if (
      this.state.email.indexOf('@') === -1 ||
      this.state.email.lastIndexOf('.') < this.state.email.indexOf('@')
    ) {
      this.setState({emailError: true});
    }
  }

  handlePasswordChange(password: string) {
    this.setState({password});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{width: '20%'}}>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <LoginDiv>
            <TextField
              fullWidth
              error={this.state.emailError}
              id="email"
              label="Email"
              helperText={
                this.state.emailError && 'Please enter a valid email address.'
              }
              onChange={e => this.handleEmailChange(e.target.value)}
              onBlur={() => {
                this.verifyEmail();
              }}
              onFocus={() => {
                this.setState({emailError: false});
              }}
            />
          </LoginDiv>
          <LoginDiv>
            <TextField
              fullWidth
              error={this.state.passwordError}
              id="password"
              label="Password"
              onChange={e => this.handlePasswordChange(e.target.value)}
              onFocus={() => {
                this.setState({passwordError: false});
              }}
              type="password"
            />
          </LoginDiv>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{marginTop: '3em', width: '100%'}}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
