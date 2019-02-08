import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../components';

describe('Button component', () => {
  let wrapper;
  let props;

  describe('Button renders', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<Button {...props} />);
    });
    it('it renders button', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
