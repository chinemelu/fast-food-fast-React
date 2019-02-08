import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Render Footer', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      footerText: 'Food Direct',
      className: 'footerClass'
    };
    wrapper = shallow(<Footer {...props} />);
  });
  it('it renders the switcher component', () => {
    expect(wrapper).toBeDefined();
  });
});
