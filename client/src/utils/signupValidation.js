// https://stackoverflow.com/questions/20003870/how-do-i-create-regex-of-min-8-max-16-alphabetic-numbers-and-no-space
// https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
// https://stackoverflow.com/questions/9289451/regular-expression-for-alphabets-with-spaces

const signupValidation = (data) => {
  const errors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'First name field is required';
  }
  if (data.firstName.trim() && !/^[a-zA-Z]+$/.test(data.firstName.trim())) {
    errors
      .firstName = 'First name must consist of only alphabets and no spaces';
  }
  if (data.firstName.trim()
    && /^[a-zA-Z]+$/.test(data.firstName.trim())
    && data.firstName.trim().length < 2) {
    errors
      .firstName = 'First name must consist of between 2-50 characters';
  }
  if (data.firstName.trim()
  && /^[a-zA-Z]+$/ && data.firstName.trim().length > 50) {
    errors
      .firstName = 'First name must consist of between 2-50 characters';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Last Name field is required';
  }
  if (data.lastName.trim() && !/^[a-zA-Z]+$/.test(data.lastName.trim())) {
    errors.lastName = 'Last name must consist of only alphabets and no spaces';
  }
  if (data.lastName.trim() && /^[a-zA-Z]+$/.test(data.lastName.trim())
  && data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must consist of between 2-50 characters';
  }
  if (data.lastName.trim() && /^[a-zA-Z]+$/.test(data.lastName.trim())
  && data.lastName.trim().length > 50) {
    errors.lastName = 'Last name must consist of between 2-50 characters';
  }
  if (!data.signupEmail.trim()) {
    errors.signupEmail = 'Email field is required';
  }
  if (data.signupEmail
    .trim() && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
    .test(data.signupEmail.trim())) {
    errors.signupEmail = 'Invalid email';
  }
  if (!data.signupPassword.trim()) {
    errors.signupPassword = 'Password field is required';
  }

  if (data.signupPassword.trim() && data.signupPassword.trim().length < 8) {
    errors.signupPassword = 'Password must be between 8-20 characters';
  }

  if (data.signupPassword.trim() && data.signupPassword.trim().length > 20) {
    errors.signupPassword = 'Password must be between 8-20 characters';
  }

  if (!data.confirmPassword.trim()) {
    errors.confirmPassword = 'Please confirm your password';
  }
  if (data.signupPassword.trim() !== data.confirmPassword.trim()) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export default signupValidation;
