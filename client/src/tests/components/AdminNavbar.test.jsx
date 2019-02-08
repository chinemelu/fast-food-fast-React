import React from 'react';
import { shallow } from 'enzyme';
import AdminNavbar from '../../components/AdminNavbar';

describe('Render admin navbar', () => {
  let wrapper;
  let props;

  describe('AdminNavbar', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<AdminNavbar {...props} />);
    });
    it('it renders admin navbar', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
