import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosMethods from '../../utils/axiosMethods';
import * as actions from '../../actions/loginActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mockSuccessfulPostRequest;
let mockFailedLoginRequest;
let userData;


describe('async actions', () => {
  describe('Login route resolved actions', () => {
    beforeEach(() => {
      mockSuccessfulPostRequest = sinon
        .stub(axiosMethods, 'Post').resolves({});
    });

    afterEach(() => {
      mockSuccessfulPostRequest.restore();
    });

    it('creates SET_CURRENT_USER when user logs in', async () => {
      userData = {
        email: 'myEmail@test.com',
        password: 'myPassword@test.com'
      };
      const sentData = {
        email: userData.email,
        password: userData.password
      };
      const expectedActions = [
        {
          type: types.SET_CURRENT_USER,
          userInfo: null
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.loginRequest(sentData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Get route failed actions', () => {
    beforeEach(() => {
      mockFailedLoginRequest = sinon
        .stub(axiosMethods, 'Post').throws({ response: { data: 'Invalid username or password' } });
    });

    afterEach(() => {
      mockFailedLoginRequest.restore();
    });

    it('returns an error when trying to login',
      async () => {
        const store = mockStore({});
        const response = await store.dispatch(actions.loginRequest(userData));
        expect(response).toEqual({ data: 'Invalid username or password' });
      });
  });
});
