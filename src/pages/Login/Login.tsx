import {Button, FormHelperText, TextField} from '@material-ui/core';
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FullWidthDiv} from '../../components/common/common';
import {Loading} from '../../components/Loading/Loading';
import {makeLoginCall} from '../../redux/actions/users/actions';
import {AppState} from '../../redux/types';
import {LoginDiv} from './components';

interface Props {
  errorMessage: string;
  makeLoginCall: any;
}

interface State {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  isLoggingIn: boolean;
}

class Login extends React.Component<Props, State> {
  state = {
    email: '',
    emailError: false,
    password: '',
    passwordError: false,
    isLoggingIn: false,
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.errorMessage !== prevProps.errorMessage) {
      this.setState({emailError: true, passwordError: true});
    }
  }

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
      this.props.makeLoginCall(this.state.email, this.state.password);
    }
  }

  render() {
    const {errorMessage} = this.props;
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
              helperText={
                !errorMessage &&
                emailError &&
                'Please enter a valid email address.'
              }
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
                !errorMessage &&
                passwordError &&
                'Minimum length for passwords is 8 characters.'
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
            {isLoggingIn && !errorMessage ? (
              <Loading />
            ) : (
              <FullWidthDiv>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </FullWidthDiv>
            )}
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch: any) => ({
  makeLoginCall: bindActionCreators(makeLoginCall, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
