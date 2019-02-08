
import React from 'react';
import { mount } from 'enzyme';
import { OrderHistory } from '../../components';

describe('Render Order History', () => {
  let wrapper;
  let props;

  describe('Find the classname of hide', () => {
    beforeEach(() => {
      props = {
        order: {
          order: {
            id: 'owowoiwoi',
            date: '24/02/2019',
            items: []
          }
        },
        item: {
          id: 'siowiei38943838',
          price: 200,
          name: 'Mango'
        }
      };
      wrapper = mount(<OrderHistory {...props} />);
    });
    it('it calls danger flash message class', () => {
      expect(wrapper.find('tr').length).toEqual(2);
      expect(wrapper).toBeDefined();
    });
  });
});
