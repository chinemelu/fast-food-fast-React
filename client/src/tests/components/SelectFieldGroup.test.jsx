import React from 'react';
import { shallow } from 'enzyme';
import SelectFieldGroup from '../../components/SelectFieldGroup';

describe('Select Field Group', () => {
  let wrapper;
  let props;

  describe('Select Field Group', () => {
    beforeEach(() => {
      props = {
        cartItem: {
          id: 'ieiwwe49595',
          quantity: 20
        },
        handleChange: jest.fn(),
        value: 'value',
        field: 'totalQuantity',
        cart: {
          items: [{
            quantity: 0,
            price: 200,
            name: 'test name'
          }]
        }
      };
      wrapper = shallow(<SelectFieldGroup {...props} />);
    });
    it('it renders select field group', () => {
      expect(wrapper).toBeDefined();
    });
  });
});
