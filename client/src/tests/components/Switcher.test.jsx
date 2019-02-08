import React from 'react';
import { shallow } from 'enzyme';
import Switcher from '../../components/Switcher';

describe('Render ', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      firstClassName: 'first class',
      secondClassName: 'second class',
      listClass: 'list class',
      firstValue: 'first value',
      secondValue: 'second value',
      onClickFirstSwitcher: 'first switcher',
      onClickSecondSwitcher: 'second switcher'
    };
    wrapper = shallow(<Switcher {...props} />);
  });
  it('it renders the switcher component', () => {
    expect(wrapper).toBeDefined();
  });
});
