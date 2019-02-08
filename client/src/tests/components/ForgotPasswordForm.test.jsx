import React from 'react';
import { shallow } from 'enzyme';
import { ForgotPasswordForm } from '../../components';

describe('Carousel component', () => {
  let wrapper;
  const props = {
    email: 'testemail@email.com',
    errors: 'invalid email',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onClickLoginButton: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<ForgotPasswordForm {...props} />);
  });
  it('it renders carousel', () => {
    expect(wrapper).toBeDefined();
  });
});
