import React from 'react';
import { shallow } from 'enzyme';
import { FoodCard } from '../../components';

describe('Food Card component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {
        id: 'hi128reuwi8r',
        name: 'test item'
      },
      handleAddItemToCart: jest.fn()
    };
    wrapper = shallow(<FoodCard {...props} />);
  });
  it('it renders a food', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.find('Button').simulate('click'));
  });
});
