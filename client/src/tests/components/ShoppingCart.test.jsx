import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCart } from '../../components';

describe('Shopping cart view', () => {
  let wrapper;
  let props;

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
    wrapper = shallow(<ShoppingCart {...props} />);
  });
  it('it renders shopping cart', () => {
    expect(wrapper).toBeDefined();
  });
});
