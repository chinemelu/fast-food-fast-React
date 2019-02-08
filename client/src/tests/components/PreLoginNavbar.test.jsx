import React from 'react';
import { shallow } from 'enzyme';
import PreLoginNavbar from '../../components/PreLoginNavbar';

describe('Pre-login navbar', () => {
  let wrapper;
  let props;

  describe('Pre-Login Navbar', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<PreLoginNavbar {...props} />);
    });
    it('it renders pre-login navbar', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
