import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';

const LoginForm = ({
  loginErrors,
  email,
  password,
  onChange,
  onBlur,
  onClickForgotPasswordLink,
  onInput,
  onSubmit,
  isLoading
}) => (
  <section id="login-section">
    <form className="cd-form" autoComplete="off" onSubmit={onSubmit}>
      <FlashMessageList
        customAlertClass="login-alert"
      />
      <TextFieldGroup
        error={loginErrors && loginErrors.email}
        labelValue="Email"
        labelClass="input-label"
        labelFor="login-username-email"
        field="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        feedbackClass="login-error-message"
        className="input-field"
        id="login-email"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        error={loginErrors && loginErrors.password}
        type="password"
        labelValue="Password"
        labelClass="input-label"
        labelFor="login-password"
        field="password"
        value={password}
        onChange={onChange}
        onBlur={onBlur}
        id="login-password"
        feedbackClass="login-error-message"
        className="input-field"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        type="checkbox"
        labelValue="Remember me"
        feedbackClass=""
        className="input-field"
        id="remember-me"
        inputContainerClass="input-container"
      />

      <TextFieldGroup
        type="submit"
        value="LOGIN"
        feedbackClass=""
        className="submit-form-btn"
        id="login-form-btn"
        inputContainerClass="input-container"
        disabled={isLoading || Object.keys(loginErrors).length > 0}
      />
      <Link
        id="forgot-password"
        to="#"
        onClick={onClickForgotPasswordLink}
      >
          Forgot password?
      </Link>
    </form>
  </section>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginErrors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default LoginForm;
