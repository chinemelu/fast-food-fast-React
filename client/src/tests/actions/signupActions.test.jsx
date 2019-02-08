import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosMethods from '../../utils/axiosMethods';
import * as actions from '../../actions/signupActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mockSuccessfulPostRequest;
let mockFailedPostRequest;

const userData = {
  firstName: 'test',
  lastName: 'name',
  email: 'myEmail@test.com',
  password: 'myPassword@test.com',
  reEnterPassword: 'myPassword@test.com'
};
const sentData = {
  email: userData.email,
  password: userData.password
};

describe('async actions', () => {
  describe('sign up route resolved actions', () => {
    beforeEach(() => {
      mockSuccessfulPostRequest = sinon
        .stub(axiosMethods, 'Post').resolves({});
    });

    afterEach(() => {
      mockSuccessfulPostRequest.restore();
    });
    it('creates SET_CURRENT_USER when user clicks on signup button', async () => {
      const expectedActions = [
        {
          type: types.SET_CURRENT_USER,
          userInfo: null
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.signupRequest(sentData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Signup route failed actions', () => {
    beforeEach(() => {
      mockFailedPostRequest = sinon
        .stub(axiosMethods, 'Post')
        .throws({ response: { data: 'Username exists' } });
    });

    afterEach(() => {
      mockFailedPostRequest.restore();
    });
    it('causes an error when user clicks on order button', async () => {
      const store = mockStore({});
      const response = await store
        .dispatch(actions.signupRequest(sentData));
      expect(response).toEqual('Username exists');
    });
  });
});
