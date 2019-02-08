import React from 'react';
import { shallow } from 'enzyme';
import { LandingPageView } from '../../views/LandingPage';

describe('Render Landing Page', () => {
  let wrapper;
  let props;
  let event;
  let instance;

  beforeEach(() => {
    props = {
      clearBannerMessages: jest.fn(),
      userLogin: jest.fn(),
      addBannerMessage: jest.fn()
    };
    wrapper = shallow(<LandingPageView {...props} />);
    instance = wrapper.instance();
  });
  describe('calling login methods directly from landing page', () => {
    it('it should setstate of email when input email value is changed', () => {
      event = {
        target: {
          name: 'email',
          value: 'testemail@yahoo.com'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('email')).toEqual('testemail@yahoo.com');
    });
    it('it should setstate of input password when input password value is + '
  + 'changed',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('password')).toEqual('password');
    });
    it('it should call the isValid function for login submission which should return true if there +'
  + 'are no errors', () => {
      instance.setState({
        email: 'testemail@yahoo.com', password: 'testpassword'
      });
      expect(instance.isValid()).toEqual(true);
    });
    it(`it should call the isValid function for login submission which should return false ${
      'if there are two errors'}`, () => {
      instance.setState({ email: '', password: '' });
      expect(instance.isValid()).toEqual(false);
    });
    it(`it should call the isValid function for login submission which should return false ${
      'if there is only one error'}`, () => {
      instance.setState({ email: 'tee', password: 'anthony' });
      expect(instance.isValid()).toEqual(false);
    });
    it(`it should call clearBannerMessages props if login input fields are ${
      'valid and on submission'}`,
    () => {
      wrapper = shallow(<LandingPageView
        {...props}
        onClick={props.clearBannerMessages}
      />);
      instance = wrapper.instance();
      instance.setState({ email: 'teejay2k@yahoo.com', password: 'anthony' });
      instance.handleOnSubmit(event);
      expect(props.clearBannerMessages).toHaveBeenCalled();
    });
    it(`it should call setError state to null object if there are no ${
      'errors on submit of login details'}`,
    () => {
      instance.setState({
        email: 'testemail@yahoo.com', password: 'testpassword'
      });
      instance.handleOnSubmit(event);
      expect(wrapper.state().loginErrors).toEqual({});
    });
    it('it should set state of field on input  and return an error for an +'
  + 'invalid field',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleOnInput(event);
      expect(wrapper.state().password).toEqual('password');
    });
    it('it should set state of error if wrong value is added on input', () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: ''
        }
      };
      instance.setState({ email: '', password: '' });
      instance.handleOnInput(event);
      expect(wrapper.state().loginErrors).toEqual({
        password: 'Password field is required'
      });
    });
    it(`it should set state of field on login blur and return an error for an ${
      +'invalid field'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: ''
        }
      };
      instance.setState({ email: '', password: '' });
      instance.handleOnBlur(event);
      expect(wrapper.state().loginErrors).toEqual({
        password: 'Password field is required'
      });
    });
    it(`Errors state should be deleted on blur if the former error is removed ${
      'from input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'password',
        }
      };
      instance.setState({ password: '' }, () => {
        instance.handleOnBlur(event);
        expect(wrapper.state().loginErrors).toEqual({
          password: 'Password field is required'
        });
      });
      instance.setState({ password: 'myPassword' });
      instance.handleOnBlur(updatedEvent);
      expect(wrapper.state().loginErrors).toEqual({});
    });
    it(`Errors state should be empty on input if the former error is removed ${
      'from input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'email',
          value: ''
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'email',
          value: 'mySecretEmail@mail.com'
        }
      };
      instance.setState({ email: '' }, () => {
        instance.handleOnInput(event);
        expect(wrapper.state().loginErrors).toEqual({
          email: 'Email field is required'
        });
      });
      instance.setState({ email: 'mySecretEmail@mail.com' }, () => {
        instance.handleOnInput(updatedEvent);
        expect(wrapper.state().loginErrors).toEqual({});
      });
    });
    it('should open the login section when the login button is clicked', () => {
      instance.onClickLoginButton();
      expect(wrapper.state().isLoginSectionShown).toEqual(true);
      expect(wrapper.state().isSignupSectionShown).toEqual(false);
      expect(wrapper.state().isForgotPasswordSectionShown).toEqual(false);
    });
    it('should open the login section when the login/register button'
     + 'on the navbar is clicked',
    () => {
      instance.onClickLoginRegistrationNavLink();
      expect(wrapper.state().isLoginSectionShown).toEqual(true);
      expect(wrapper.state().isLoginRegistrationModalShown).toEqual(true);
      expect(wrapper.state().isSignupSectionShown).toEqual(false);
      expect(wrapper.state().isForgotPasswordSectionShown).toEqual(false);
    });
    it('should change the className of the input field on blur in the login', () => {
      event = {
        preventDefault() { },
        target: {
          value: 'somevalue'
        }
      };
      instance.handleOnBlur(event);
      expect(event.target.className).toEqual('input-field used');
    });
    it('clearBannerMessage props is null on render', () => {
      expect(LandingPageView.defaultProps.clearBannerMessages).toBeDefined();
      expect(LandingPageView.defaultProps.clearBannerMessages()).toEqual(null);
    });
  });


  describe('calling signup methods directly from landing page', () => {
    it('it should setstate of email when input email value is changed on signup', () => {
      event = {
        target: {
          name: 'email',
          value: 'testemail@yahoo.com'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('email')).toEqual('testemail@yahoo.com');
    });
    it('it should setstate of input password when input password value is + '
  + 'changed',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('password')).toEqual('password');
    });
    it('it should call the isValid function for signup submission which should return true if there +'
  + 'are no errors', () => {
      instance.setState({
        firstName: 'test',
        lastName: 'user',
        signupEmail: 'testemail@yaho.com',
        signupPassword: 'testpassword',
        confirmPassword: 'testpassword'
      });
      expect(instance.isValidSignup()).toEqual(true);
    });
    it(`it should call the isValid function for signup submission which should return false ${
      'if there are multiple errors'}`, () => {
      instance.setState({
        firstName: '',
        lastName: '',
        signupEmail: '',
        signupPassword: '',
        confirmPassword: ''
      });
      expect(instance.isValidSignup()).toEqual(false);
    });
    it(`it should call the isValid function for Signup  submission which should return false ${
      'if there is only one error'}`, () => {
      instance.setState({
        firstName: '',
        lastName: 'user',
        signupEmail: 'testemail@yaho.com',
        signupPassword: 'testpassword',
        confirmPassword: 'testpassword'
      });
      expect(instance.isValidSignup()).toEqual(false);
    });
    it(`it should call clearBannerMessages props if Signup input fields are ${
      'valid and on submission'}`,
    () => {
      wrapper = shallow(<LandingPageView
        {...props}
        onClick={props.clearBannerMessages}
      />);
      instance = wrapper.instance();
      instance.setState({
        firstName: 'test',
        lastName: 'user',
        signupEmail: 'testemail@yaho.com',
        signupPassword: 'testpassword',
        confirmPassword: 'testpassword'
      });
      instance.handleOnSubmit(event);
      expect(props.clearBannerMessages).toHaveBeenCalled();
    });
    it(`it should call setError state to null object if there are no ${
      'errors on submit of signup details'}`,
    () => {
      instance.setState({
        firstName: 'test',
        lastName: 'user',
        signupEmail: 'testemail@yaho.com',
        signupPassword: 'testpassword',
        confirmPassword: 'testpassword'
      });
      instance.handleSignupSubmit(event);
      expect(wrapper.state().signupErrors).toEqual({});
    });
    it('it should set state of field on input  and return an error for an +'
  + 'invalid field',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleSignupOnInput(event);
      expect(wrapper.state().password).toEqual('password');
    });
    it('it should set state of error if wrong value is added on input', () => {
      event = {
        preventDefault() { },
        target: {
          name: 'signupPassword',
          value: ''
        }
      };
      instance.setState({ email: '', password: '' });
      instance.handleSignupOnInput(event);
      expect(wrapper.state().signupErrors).toEqual({
        signupPassword: 'Password field is required'
      });
    });
    it(`it should set state of field on blur and return an error for an ${
      +'invalid field'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'signupPassword',
          value: ''
        }
      };
      instance.setState({
        firstName: 'test',
        lastName: 'user',
        signupEmail: 'testemail@yaho.com',
        signupPassword: '',
        confirmPassword: 'testpassword'
      });
      instance.handleSignupOnBlur(event);
      expect(wrapper.state().signupErrors).toEqual({
        signupPassword: 'Password field is required'
      });
    });
    it(`Errors state should be deleted on blur if the former error is removed ${
      'from the input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'signupPassword',
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'signupPassword',
        }
      };
      instance.setState({ signupPassword: '' }, () => {
        instance.handleSignupOnBlur(event);
        expect(wrapper.state().signupErrors).toEqual({
          signupPassword: 'Password field is required'
        });
      });
      instance.setState({ signupPassword: 'myPassword' });
      instance.handleSignupOnBlur(updatedEvent);
      expect(wrapper.state().signupErrors).toEqual({});
    });
    it(`Errors state should be empty on input if the former error is removed ${
      'from the input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'signupEmail',
          value: ''
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'signupEmail',
          value: 'mySecretEmail@mail.com'
        }
      };
      instance.setState({ email: '' }, () => {
        instance.handleSignupOnInput(event);
        expect(wrapper.state().signupErrors).toEqual({
          signupEmail: 'Email field is required'
        });
      });
      instance.setState({ email: 'mySecretEmail@mail.com' }, () => {
        instance.handleSignupOnInput(updatedEvent);
        expect(wrapper.state().signupErrors).toEqual({});
      });
    });
    it('should open the signup modal section when the signup button is clicked', () => {
      instance.onClickSignupButton();
      expect(wrapper.state().isLoginSectionShown).toEqual(false);
      expect(wrapper.state().isSignupSectionShown).toEqual(true);
      expect(wrapper.state().isForgotPasswordSectionShown).toEqual(false);
    });
    it('should change the className of the input field on blur in the signup', () => {
      event = {
        preventDefault() { },
        target: {
          value: 'somevalue'
        }
      };
      instance.handleSignupOnBlur(event);
      expect(event.target.className).toEqual('input-field used');
    });
  });
  describe('modal interactions', () => {
    it('should close modal when the escape button is clicked', () => {
      event = {
        preventDefault() { },
        which: 27,
        code: 'Escape',
        key: 'Escape'
      };
      instance.escapeModal(event);
      expect(wrapper.state().isLoginRegistrationModalShown).toEqual(false);
    });
    it('should open the forgot password modal section when the forgot password link is clicked',
      () => {
        instance.onClickForgotPasswordLink();
        expect(wrapper.state().isLoginSectionShown).toEqual(false);
        expect(wrapper.state().isSignupSectionShown).toEqual(false);
        expect(wrapper.state().isForgotPasswordSectionShown).toEqual(true);
      });
    it('should close the modal when the outside is clicked',
      () => {
        event = {
          preventDefault() { },
          target: {
            matches: jest.fn()
          }
        };
        instance.handleOnOutsideClick(event);
        expect(wrapper.state().isLoginRegistrationModalShown).toEqual(false);
      });
  });
});
