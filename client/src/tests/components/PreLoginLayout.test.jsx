import React from 'react';
import { shallow } from 'enzyme';
import { PreLoginLayout } from '../../components';

describe('Render pre-login layout', () => {
  let wrapper;
  let props;

  describe('it should be defined', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<PreLoginLayout {...props} />);
    });
    it('it renders the Pre-Login layout', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
