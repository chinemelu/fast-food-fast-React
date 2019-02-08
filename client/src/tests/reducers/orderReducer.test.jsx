import * as types from '../../actionTypes';
import orderReducer from '../../reducers/orderReducer';

const initialState = [];

describe('menu reducer', () => {
  it('returns the initial state when there\'s no new action', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the correct state when a user gets the menu', () => {
    const action = {
      type: types.GET_MY_ORDER_HISTORY,
      orderHistory: {
        orders: [{
          date: '24/07/1991',
          id: 'wkoqewoeiie',
          userId: 'kkwoowo',
          items: []
        }]
      }
    };
    expect(orderReducer(initialState, action)).toEqual({
      orders: [{
        date: '24/07/1991',
        id: 'wkoqewoeiie',
        userId: 'kkwoowo',
        items: []
      }]
    });
  });
});
