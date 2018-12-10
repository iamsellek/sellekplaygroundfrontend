import {Button, TextField} from '@material-ui/core';
import * as React from 'react';
import {Loading} from '../../components/Loading/Loading';
import {LoginDiv} from './components';

interface State {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  isLoggingIn: boolean;
}

class Login extends React.Component<{}, State> {
  state = {
    email: '',
    emailError: false,
    password: '',
    passwordError: false,
    isLoggingIn: false,
  };

  handleEmailChange(email: string) {
    this.setState({email});
  }

  hasEmailError() {
    if (
      this.state.email.indexOf('@') === -1 ||
      this.state.email.lastIndexOf('.') < this.state.email.indexOf('@')
    ) {
      return true;
    }

    return false;
  }

  handlePasswordChange(password: string) {
    this.setState({password});
  }

  hasPasswordError() {
    if (this.state.password.length < 8) {
      return true;
    }

    return false;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (this.hasEmailError() || this.hasPasswordError()) {
      this.setState({
        emailError: this.hasEmailError(),
        passwordError: this.hasPasswordError(),
      });
    } else {
      this.setState({isLoggingIn: true});
    }
  }

  render() {
    const {emailError, passwordError, isLoggingIn} = this.state;

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
              error={emailError}
              id="email"
              label="Email"
              helperText={emailError && 'Please enter a valid email address.'}
              onChange={e => this.handleEmailChange(e.target.value)}
              onBlur={() => {
                this.setState({emailError: this.hasEmailError()});
              }}
              onFocus={() => {
                this.setState({emailError: false});
              }}
            />
          </LoginDiv>
          <LoginDiv>
            <TextField
              fullWidth
              error={passwordError}
              id="password"
              label="Password"
              helperText={
                passwordError && 'Minimum length for passwords is 8 characters.'
              }
              onChange={e => this.handlePasswordChange(e.target.value)}
              onBlur={() => {
                this.setState({passwordError: this.hasPasswordError()});
              }}
              onFocus={() => {
                this.setState({passwordError: false});
              }}
              type="password"
            />
          </LoginDiv>
          <div
            style={{
              display: 'flex',
              paddingTop: '3em',
            }}
          >
            {isLoggingIn ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
