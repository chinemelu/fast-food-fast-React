import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../components/SignupForm';

describe('Signup Page', () => {
  describe('render Signup Page', () => {
    const props = {
      signupErrors: 'some error',
      onSubmit: () => {},
      signupEmail: 'some@email.com',
      signupPassword: 'password',
      isLoading: false,
      onClickForgotPasswordLink: jest.fn(),
      firstName: 'test',
      lastName: 'user',
      confirmPassword: 'password',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onInput: jest.fn(),
      handleSignupSubmit: jest.fn()
    };
    it('renders the login page component', () => {
      const wrapper = shallow(<SignupForm {...props} />);
      expect(wrapper).toBeDefined();
    });
  });
});
