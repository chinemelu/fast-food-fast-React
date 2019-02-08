import React from 'react';
import { shallow } from 'enzyme';
import GuestNavbar from '../../components/GuestNavbar';

describe('Render guest navbar', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      cart: {
        cart: {
          cart: {
            totalQuantity: 5
          }
        }
      }
    };
    wrapper = shallow(<GuestNavbar {...props} />);
  });
  it('it renders Guest Navbar', () => {
    expect(wrapper).toBeDefined();
  });
});
