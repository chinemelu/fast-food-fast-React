import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';

describe('Render Login Page', () => {
  describe('render Login Page', () => {
    const props = {
      onChange: () => {},
      onBlur: () => {},
      onInput: () => {},
      loginErrors: 'some error',
      onSubmit: () => {},
      email: 'some@email.com',
      password: 'password',
      isLoading: false,
      onClickForgotPasswordLink: jest.fn()
    };
    it('renders the login page component', () => {
      const wrapper = shallow(<LoginForm {...props} />);
      expect(wrapper.find('TextFieldGroup').length).toEqual(4);
      expect(wrapper.find('Link').length).toEqual(1);
      expect(wrapper.find('Link').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
