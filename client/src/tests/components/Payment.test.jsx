import React from 'react';
import { shallow } from 'enzyme';
import Payment from '../../components/Payment';

describe('Render ', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      errors: {},
      deliveryAddress: 'address',
      mobileNumber: '080munnber',
      onSubmit: jest.fn()
    };
    wrapper = shallow(<Payment {...props} />);
  });
  it('it renders the switcher component', () => {
    expect(wrapper).toBeDefined();
  });
});
