import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup.jsx';

const ForgotPasswordForm = ({
  email,
  errors,
  onChange,
  onBlur,
  onClickLoginButton,
}) => (
  <section id="forgot-password-section">
    <form className="cd-form" autoComplete="off">
      <div className="input-container">
        <p className="forgot-password-header">
            A reset link will be sent to your email
        </p>
      </div>
      <TextFieldGroup
        error={errors && errors.email}
        labelValue="Email"
        labelClass="input-label"
        labelFor="forgot-password-email"
        field="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        errorFeedbackClass="login-invalid-feedback"
        validFeedbackClass="login-valid-feedback"
        errorId="login-email-error"
        feedbackClass=""
        className="input-field"
        id="forgot-password-email"
        inputContainerClass="input-container"
      />

      <TextFieldGroup
        type="submit"
        value="send"
        feedbackClass=""
        className="submit-form-btn"
        id="login-form-btn"
        inputContainerClass="input-container"
      />
      <Link
        id="back-to-login"
        to="#"
        onClick={onClickLoginButton}

      >
Back to Login

      </Link>
    </form>
  </section>
);

ForgotPasswordForm.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};


export default ForgotPasswordForm;
