import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import FlashMessageList, { mapStateToProps }
  from '../../components/FlashMessagesList';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('FlashMessageList component', () => {
  let wrapper;
  let state;
  let store;
  beforeEach(() => {
    wrapper = shallow(<FlashMessageList />);

    store = mockStore({
      flashMessages: [{
        type: 'error',
        text: 'error message'
      }]
    });
  });
  describe('Renders Flash Messages', () => {
    it('renders flash messages', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });
  });
  describe('methods that are called', () => {
    it('should show previous error messages', () => {
      state = {
        flashMessages: ['Invalid email or password']
      };
      expect(mapStateToProps(state).messages['0'])
        .toBe('Invalid email or password');
    });
  });
  describe('renders child component', () => {
    it('renders flash message child', () => {
      const wrapper = mount(
        <Provider store={store}>
          <FlashMessageList
            key="1"
            message="some message"
            customAlertClass="some class"
            deleteBannerMessage={jest.fn()}
          />

        </Provider>
      );
      expect(wrapper.find('div').length).toEqual(2);
      expect(wrapper.find('span').length).toEqual(1);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });
});
