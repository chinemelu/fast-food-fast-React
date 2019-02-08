import React from 'react';
import { shallow } from 'enzyme';
import { LinkButton } from '../../components';

describe('Link Button component', () => {
  let wrapper;
  let props;

  describe('Link Button renders', () => {
    props = {
      history: {},
      location: {},
      match: {},
      staticContext: {},
      to: '/',
      id: 'id',
      onClick: jest.fn()
    };
    beforeEach(() => {
      wrapper = shallow(<LinkButton {...props} />);
    });
    it('it renders button', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
