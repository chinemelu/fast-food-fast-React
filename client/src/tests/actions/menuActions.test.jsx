import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosMethods from '../../utils/axiosMethods';
import * as actions from '../../actions/menuActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mockSuccessfulGetRequest;
let mockFailedGetRequest;

describe('async actions', () => {
  describe('Get menu route resolved actions', () => {
    beforeEach(() => {
      mockSuccessfulGetRequest = sinon
        .stub(axiosMethods, 'Get').resolves({});
    });

    afterEach(() => {
      mockSuccessfulGetRequest.restore();
    });
    it('creates GET_MENU when user clicks on products page', async () => {
      const expectedActions = [
        {
          type: types.GET_MENU,
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.getMenuRequest());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Get menu route failed actions', () => {
    beforeEach(() => {
      mockFailedGetRequest = sinon
        .stub(axiosMethods, 'Get')
        .throws({ response: { data: 'Network error' } });
    });

    afterEach(() => {
      mockFailedGetRequest.restore();
    });
    it('causes an error when user clicks on products page', async () => {
      const store = mockStore({});
      const response = await store.dispatch(actions.getMenuRequest());
      expect(response).toEqual('Network error');
    });
  });
});
