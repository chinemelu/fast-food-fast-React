import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';

describe('Render Spinner', () => {
  let wrapper;
  let props;

  describe('Find the classname of hide', () => {
    beforeEach(() => {
      props = {
        hideClassName: 'hide'
      };
      wrapper = shallow(<Spinner {...props} />);
    });
    it('it calls danger flash message class', () => {
      expect(wrapper.find('#spinner').find('.hide').length).toEqual(1);
    });
  });
});
