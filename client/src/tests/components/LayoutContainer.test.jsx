import React from 'react';
import { shallow } from 'enzyme';
import { LayoutContainer, AfterLoginLayout } from '../../components';
import { LandingPageView } from '../../views/LandingPage';

describe('Layout container component', () => {
  let wrapper;
  const props = {
    layout: <AfterLoginLayout />,
    component: <LandingPageView />
  };

  beforeEach(() => {
    wrapper = shallow(<LayoutContainer {...props} />);
  });

  it('it renders the layout container component', () => {
    expect(wrapper).toBeDefined();
  });
});
