import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosMethods from '../../utils/axiosMethods';
import * as actions from '../../actions/cartActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mockSuccessfulGetRequest;
let mockFailedGetRequest;

describe('async actions', () => {
  describe('Get route resolved actions', () => {
    beforeEach(() => {
      mockSuccessfulGetRequest = sinon
        .stub(axiosMethods, 'Get').resolves({});
    });

    afterEach(() => {
      mockSuccessfulGetRequest.restore();
    });

    it('creates a GET_CART action type when get cart method is called', async () => {
      const expectedActions = [
        {
          type: types.GET_CART,
          cart: {}
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.fetchCartRequest());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates an ADD_TO_CART action type when add to cart method is called', async () => {
      const expectedActions = [
        {
          type: types.ADD_TO_CART,
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.addToCartRequest());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Get route failed actions', () => {
    beforeEach(() => {
      mockFailedGetRequest = sinon
        .stub(axiosMethods, 'Get').returns(1).throws({ response: 'Network error' });
    });

    afterEach(() => {
      mockFailedGetRequest.restore();
    });
    it('returns an error when adding to a cart',
      async () => {
        const store = mockStore({});
        const error = await store.dispatch(actions.addToCartRequest());
        expect(error).toEqual('Network error');
      });
    it('returns an error when getting a cart',
      async () => {
        const store = mockStore({});
        const error = await store.dispatch(actions.fetchCartRequest());
        expect(error).toEqual('Network error');
      });
  });
});
