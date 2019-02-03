import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup.jsx';
import FlashMessageList from './FlashMessagesList.jsx';


const SignupForm = ({
  firstName,
  lastName,
  signupErrors,
  signupEmail,
  signupPassword,
  confirmPassword,
  onChange,
  onBlur,
  onInput,
  isLoading,
  handleSignupSubmit
}) => (
  <section id="register-section">
    <form className="cd-form" autoComplete="off" onSubmit={handleSignupSubmit}>
      <TextFieldGroup
        error={signupErrors && signupErrors.firstName}
        labelValue="First name"
        labelClass="input-label"
        labelFor="register-firstname"
        field="firstName"
        value={firstName}
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-firstname-error"
        feedbackClass="register-error-message"
        className="input-field"
        id="register-firstname"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.lastName}
        labelValue="Last name"
        labelClass="input-label"
        labelFor="register-lastname"
        field="lastName"
        value={lastName}
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-lastname-error"
        feedbackClass="register-error-message"
        className="input-field"
        id="register-lastname"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.signupEmail}
        labelValue="Email"
        labelClass="input-label"
        labelFor="register-email"
        field="signupEmail"
        value={signupEmail}
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-email-error"
        feedbackClass="register-error-message"
        className="input-field"
        id="register-email"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.signupPassword}
        labelValue="Password"
        labelClass="input-label"
        labelFor="register-password"
        field="signupPassword"
        value={signupPassword}
        type="password"
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-password-error"
        feedbackClass="register-error-message"
        className="input-field"
        id="register-password"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.confirmPassword}
        labelValue="Confirm Password"
        type="password"
        labelClass="input-label"
        labelFor="register-confirm-password"
        field="confirmPassword"
        value={confirmPassword}
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-confirm-password-error"
        feedbackClass="register-error-message"
        className="input-field"
        id="register-confirm-password"
        inputContainerClass="input-container"
        onInput={onInput}
      />

      <TextFieldGroup
        type="submit"
        value="Create account"
        className="submit-form-btn"
        id="login-form-btn"
        inputContainerClass="input-container"
        disabled={isLoading || Object.keys(signupErrors).length > 0}
      />
    </form>
  </section>
);


SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  signupEmail: PropTypes.string.isRequired,
  signupPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  signupErrors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default SignupForm;
