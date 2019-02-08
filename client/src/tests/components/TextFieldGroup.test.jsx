import React from 'react';
import { shallow } from 'enzyme';
import TextFieldGroup from '../../components/TextFieldGroup';

let wrapper;
let props;

describe('Render text input field', () => {
  beforeEach(() => {
    props = {
      field: 'name',
      value: '',
      error: 'Password not found',
      type: 'text',
      onChange: () => 'I have changed',
      className: 'moi',
      onBlur: jest.fn(),
      labelValue: 'label',
      labelClass: 'class',
      labelFor: 'class',
      id: 'id',
      inputContainerClass: 'container class',
      placeholder: 'Jest Test',
      onInput: 'Input test',
      feedbackClass: 'feedbackClass',
      disabled: 'disabled class'
    };
    wrapper = shallow(<TextFieldGroup {...props} />);
  });
  it('renders one text input field', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  describe('', () => {
    it('does not render the feedback class when there are no errors', () => {
      wrapper.setProps({ error: null });
      expect(wrapper.find('.feedbackClass').length).toEqual(0);
    });
    it('renders the feedbackClass when there are errors', () => {
      wrapper.setProps({ error: 'Network error' });
      expect(wrapper.find('.feedbackClass').length).toEqual(1);
    });
  });
});
