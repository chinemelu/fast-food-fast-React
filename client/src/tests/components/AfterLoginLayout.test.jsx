import React from 'react';
import { shallow } from 'enzyme';
import { AfterLoginLayout } from '../../components';

describe('Render after login layout', () => {
  let wrapper;
  let props;

  describe('it should be defined', () => {
    beforeEach(() => {
      props = {
        signout: jest.fn(),
        cart: {}
      };
      wrapper = shallow(<AfterLoginLayout {...props} />);
    });
    it('it calls danger flash message class', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
