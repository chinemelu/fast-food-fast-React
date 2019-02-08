import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../components';

describe('Landing page', () => {
  let wrapper;

  const props = {
    isLoginSectionShown: true,
    isSignupSectionShown: true,
    isForgotPasswordSectionShown: true,
    isLoginRegistrationModalShown: false,
    onClickForgotPasswordLink: jest.fn(),
    onClickLoginButton: jest.fn(),
    onClickSignupButton: jest.fn(),
    onClickLoginRegistrationNavLink: jest.fn(),
    isInputFieldEmpty: true,
    handleOnChange: jest.fn(),
    handleOnBlur: jest.fn(),
    handleOutsideClick: jest.fn(),
    handleOnInput: jest.fn(),
    handleSignupOnBlur: jest.fn(),
    handleSignupOnInput: jest.fn(),
    onSubmit: jest.fn(),
    loginErrors: {},
    signupErrors: {},
    isLoading: false,
    firstName: 'test',
    lastName: 'user',
    signupEmail: 'testuser@test.com',
    signupPassword: 'testpassword',
    confirmPassword: 'testpassword',
    handleSignupSubmit: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<LandingPage {...props} />);
  });

  it('it renders landing page', () => {
    expect(wrapper).toBeDefined();
  });
});
