import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup.jsx';
import FlashMessageList from './FlashMessagesList.jsx';


const SignupForm = ({
  firstName,
  lastName,
  loginErrors,
  signupErrors,
  email,
  password,
  confirmPassword,
  onChange,
  onBlur,
}) => (
  <section id="register-section">
    <form className="cd-form" autoComplete="off">
      <TextFieldGroup
        error={signupErrors && signupErrors.firstName}
        labelValue="First name"
        labelClass="input-label"
        labelFor="register-firstname"
        field="firstName"
        value={firstName}
        onChange={onChange}
        onBlur={onBlur}
        errorFeedbackClass="login-invalid-feedback"
        validFeedbackClass="login-valid-feedback"
        errorId="register-firstname-error"
        feedbackClass="cd-error-message"
        className="input-field"
        id="register-firstname"
        inputContainerClass="input-container"
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
        errorFeedbackClass="login-invalid-feedback"
        validFeedbackClass="login-valid-feedback"
        errorId="register-lastname-error"
        feedbackClass=""
        className="input-field"
        id="register-lastname"
        inputContainerClass="input-container"
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.email}
        labelValue="Email"
        labelClass="input-label"
        labelFor="register-email"
        field="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-email-error"
        feedbackClass=""
        className="input-field"
        id="register-email"
        inputContainerClass="input-container"
      />

      <TextFieldGroup
        error={signupErrors && signupErrors.password}
        labelValue="Password"
        labelClass="input-label"
        labelFor="register-password"
        field="password"
        value={password}
        type="password"
        onChange={onChange}
        onBlur={onBlur}
        errorId="register-password-error"
        feedbackClass=""
        className="input-field"
        id="register-password"
        inputContainerClass="input-container"
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
        errorFeedbackClass="login-invalid-feedback"
        validFeedbackClass="login-valid-feedback"
        errorId="register-confirm-password-error"
        feedbackClass=""
        className="input-field"
        id="register-confirm-password"
        inputContainerClass="input-container"
      />

      <TextFieldGroup
        type="submit"
        value="Create account"
        feedbackClass=""
        className="submit-form-btn"
        id="login-form-btn"
        inputContainerClass="input-container"
      />
    </form>
  </section>
);


SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  signupErrors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default SignupForm;
