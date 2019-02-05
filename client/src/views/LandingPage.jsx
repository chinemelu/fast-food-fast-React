import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LandingPage } from '../components/Index.jsx';
import {
  addFlashMessage,
  clearFlashMessages
} from '../actions/flashActions.js';
import { loginRequest } from '../actions/loginActions.js';
import { signupRequest } from '../actions/signupActions.js';
import loginValidation from '../utils/loginValidation.js';
import Spinner from '../components/Spinner.jsx';
import signupValidation from '../utils/signupValidation.js';

class LandingPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      signupEmail: '',
      signupPassword: '',
      password: '',
      confirmPassword: '',
      loginErrors: {},
      signupErrors: {},
      isLoading: false,
      isLoginSectionShown: false,
      isSignupSectionShown: false,
      isForgotPasswordSectionShown: false,
      isLoginRegistrationModalShown: false,
      isInputFieldEmpty: {},
    };
    this.onBlurError = {};
    this.onInputError = {};
    this.onSignupBlurError = {};
    this.onSignupInputError = {};
  }

  componentDidMount() {
    document.addEventListener('keyup', this.escapeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.escapeModal);
  }

  escapeModal = (e) => {
    if (e.which === 27 || e.code === 'Escape' || e.key === 'Escape') {
      this.setState({ isLoginRegistrationModalShown: false });
    }
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClickLoginButton = () => {
    this.setState({
      isLoginSectionShown: true,
      isSignupSectionShown: false,
      isForgotPasswordSectionShown: false,
    });
  }

  onClickSignupButton = () => {
    this.setState({
      isSignupSectionShown: true,
      isLoginSectionShown: false,
      isForgotPasswordSectionShown: false,
    });
  }

  onClickForgotPasswordLink = () => {
    this.setState({
      isForgotPasswordSectionShown: true,
      isLoginSectionShown: false,
      isSignupSectionShown: false,
    });
  }

  onClickLoginRegistrationNavLink = () => {
    this.setState({
      isLoginRegistrationModalShown: true,
      isLoginSectionShown: true,
      isSignupSectionShown: false,
      isForgotPasswordSectionShown: false
    });
  }

  handleOnOutsideClick = (e) => {
    if (e.target.matches('.landingpage-modal')) {
      this.setState({ isLoginRegistrationModalShown: false });
    }
  }

  handleOnInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;
    this.setState({ [field]: value }, () => {
      const loginErrors = loginValidation(this.state);
      if (loginErrors[field]) {
        this.onInputError[field] = loginErrors[field];
        this.setState({ loginErrors: this.onInputError[field] });
      } else {
        delete (this.onInputError[field]);
      }
      this.setState({ loginErrors: this.onInputError });
    });
  }

  handleSignupOnInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;
    this.setState({ [field]: value }, () => {
      const signupErrors = signupValidation(this.state);
      if (signupErrors[field]) {
        this.onSignupInputError[field] = signupErrors[field];
        this.setState({ signupErrors: this.onSignupInputError[field] });
      } else {
        delete (this.onSignupInputError[field]);
      }
      this.setState({ signupErrors: this.onSignupInputError });
    });
  }

  handleSignupOnBlur = (e) => {
    if (e.target.value) {
      e.target.className = 'input-field used';
    } else {
      e.target.className = 'input-field';
    }
    const field = e.target.name;
    const signupErrors = signupValidation(this.state);
    if (signupErrors[field]) {
      this.onSignupBlurError[field] = signupErrors[field];
      this.setState({ signupErrors: this.onSignupBlurError[field] });
    } else {
      delete (this.onSignupBlurError[field]);
    }
    this.setState({ signupErrors: this.onSignupBlurError });
  }

  handleOnBlur = (e) => {
    if (e.target.value) {
      e.target.className = 'input-field used';
    } else {
      e.target.className = 'input-field';
    }
    const field = e.target.name;
    const loginErrors = loginValidation(this.state);
    if (loginErrors[field]) {
      this.onBlurError[field] = loginErrors[field];
      this.setState({ loginErrors: this.onBlurError[field] });
    } else {
      delete (this.onBlurError[field]);
    }
    this.setState({ loginErrors: this.onBlurError });
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addBannerMessage,
      clearBannerMessages,
      userLogin,
      history
    } = this.props;
    clearBannerMessages();
    if (this.isValid()) {
      this.setState({ loginErrors: {}, isLoading: true });
      const loginResponse = await userLogin(this.state);
      if (loginResponse) {
        this.setState({ isLoading: false });
        if (loginResponse.status === 200) {
          history.push('/products');
        } else if (
          loginResponse.status === 401
        ) {
          addBannerMessage({
            type: 'error',
            text: 'Incorrect email or password'
          });
        } else {
          addBannerMessage({
            type: 'warning',
            text: `${loginResponse.message}`
          });
        }
      }
    }
  }


  handleSignupSubmit = async (e) => {
    e.preventDefault();
    const {
      addBannerMessage,
      clearBannerMessages,
      userSignup,
      history
    } = this.props;
    clearBannerMessages();
    if (this.isValidSignup()) {
      this.setState({ signupErrors: {}, isLoading: true });
      const signupResponse = await userSignup(this.state);
      if (signupResponse) {
        this.setState({ isLoading: false });
        if (signupResponse.status === 201) {
          history.push('/products');
        } else {
          addBannerMessage({
            type: 'warning',
            text: `${signupResponse.errors.emailExists}`
          });
        }
      }
    }
  }

  isValid() {
    const loginErrors = loginValidation(this.state);
    if (Object.keys(loginErrors).length > 0) {
      this.setState({ loginErrors });
      return false;
    }
    return true;
  }

  isValidSignup() {
    const signupErrors = signupValidation(this.state);
    if (Object.keys(signupErrors).length > 0) {
      this.setState({ signupErrors });
      return false;
    }
    return true;
  }

  render() {
    const {
      isLoginSectionShown,
      isSignupSectionShown,
      isForgotPasswordSectionShown,
      isLoginRegistrationModalShown,
      isInputFieldEmpty,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      loginErrors,
      signupErrors,
      isLoading,
      signupEmail,
      signupPassword
    } = this.state;

    return (
      <React.Fragment>
        <LandingPage
          isLoginSectionShown={isLoginSectionShown}
          isSignupSectionShown={isSignupSectionShown}
          isForgotPasswordSectionShown={isForgotPasswordSectionShown}
          isLoginRegistrationModalShown={isLoginRegistrationModalShown}
          onClickForgotPasswordLink={this.onClickForgotPasswordLink}
          onClickLoginButton={this.onClickLoginButton}
          onClickSignupButton={this.onClickSignupButton}
          onClickLoginRegistrationNavLink={this.onClickLoginRegistrationNavLink}
          isInputFieldEmpty={isInputFieldEmpty}
          handleOnChange={this.handleOnChange}
          handleOnBlur={this.handleOnBlur}
          handleOnInput={this.handleOnInput}
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          handleOutsideClick={this.handleOnOutsideClick}
          onSubmit={this.handleOnSubmit}
          loginErrors={loginErrors}
          signupErrors={signupErrors}
          isLoading={isLoading}
          handleSignupOnBlur={this.handleSignupOnBlur}
          handleSignupOnInput={this.handleSignupOnInput}
          signupEmail={signupEmail}
          signupPassword={signupPassword}
          handleSignupSubmit={this.handleSignupSubmit}
        />
        <Spinner
          hideClassName={
        (this.state.isLoading === false) ? 'hide' : ''
      }
        />
      </React.Fragment>

    );
  }
}

LandingPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func,
  history: PropTypes.func
};

LandingPage.defaultProps = {
  clearBannerMessages: () => null
};

const mapDispatchToProps = {
  userLogin: loginRequest,
  addBannerMessage: addFlashMessage,
  clearBannerMessages: clearFlashMessages,
  userSignup: signupRequest
};

export default connect(null, mapDispatchToProps)(LandingPageView);
