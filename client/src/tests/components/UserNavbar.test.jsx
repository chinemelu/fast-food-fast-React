import React from 'react';
import { shallow } from 'enzyme';
import UserNavbar from '../../components/UserNavbar';

describe('Render user navbar', () => {
  let wrapper;
  let props;

  describe('Find classname of nav', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<UserNavbar {...props} />);
    });
    it('it calls danger flash message class', () => {
      expect(wrapper.find('.nav').length).toEqual(1);
    });
  });
});
