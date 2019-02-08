import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from '../../components';

describe('Carousel component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });
  it('it renders carousel', () => {
    expect(wrapper).toBeDefined();
    expect(Carousel.defaultProps.deleteBannerMessage()).toEqual(null);
  });
});
