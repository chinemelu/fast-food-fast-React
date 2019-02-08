import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import logout from '../../actions/logoutActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('async actions', () => {
  describe('Logout route resolved actions', () => {
    it('creates SET_CURRENT_USER when user logs in', async () => {
      const expectedActions = [
        {
          type: types.SET_CURRENT_USER,
          userInfo: {}
        }
      ];

      const store = mockStore({});
      await store.dispatch(logout());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
