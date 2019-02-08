import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as axiosMethods from '../../utils/axiosMethods';
import * as actions from '../../actions/orderActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mockSuccessfulPostRequest;
let mockFailedPostRequest;
let mockSuccessfulGetRequest;
let mockFailedGetRequest;

const deliveryData = {
  deliveryAddress: 'my address',
  mobileNumber: '00 my number'
};

describe('async actions', () => {
  describe('place order route resolved actions', () => {
    beforeEach(() => {
      mockSuccessfulPostRequest = sinon
        .stub(axiosMethods, 'Post').resolves({});
    });

    afterEach(() => {
      mockSuccessfulPostRequest.restore();
    });
    it('creates PLACE_ORDER when user clicks on proceed button', async () => {
      const expectedActions = [
        {
          type: types.PLACE_ORDER,
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.placeOrderRequest(deliveryData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Post order route failed actions', () => {
    beforeEach(() => {
      mockFailedPostRequest = sinon
        .stub(axiosMethods, 'Post')
        .throws({ response: { data: 'Network error' } });
    });

    afterEach(() => {
      mockFailedPostRequest.restore();
    });
    it('causes an error when user clicks on order button', async () => {
      const store = mockStore({});
      const response = await store
        .dispatch(actions.placeOrderRequest(deliveryData));
      expect(response).toEqual({ data: 'Network error' });
    });
  });
  describe('Get order history resolved route ', () => {
    beforeEach(() => {
      mockSuccessfulGetRequest = sinon.stub(axiosMethods, 'Get')
        .resolves({});
    });
    afterEach(() => {
      mockSuccessfulGetRequest.restore();
    });
    it('creates GET_MY_ORDER_HISTORY when user clicks on order history button', async () => {
      const userId = 'dsisfhoiwoi2338382';

      const expectedActions = [
        {
          type: types.GET_MY_ORDER_HISTORY,
          orderHistory: {}
        }
      ];

      const store = mockStore({});
      await store.dispatch(actions.getMyOrderHistoryRequest(userId));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Get order history failed route ', () => {
    beforeEach(() => {
      mockFailedGetRequest = sinon.stub(axiosMethods, 'Get')
        .rejects({ response: 'Network error' });
    });
    afterEach(() => {
      mockFailedGetRequest.restore();
    });
    it('creates GET_MY_ORDER_HISTORY when user clicks on order history button', async () => {
      const userId = 'dsisfhoiwoi2338382';

      const store = mockStore({});
      const response = await store.dispatch(actions.getMyOrderHistoryRequest(userId));
      expect(response).toEqual('Network error');
    });
  });
});
