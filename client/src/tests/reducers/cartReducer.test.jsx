import * as types from '../../actionTypes';
import cartReducer from '../../reducers/cartReducer';

const initialState = {
  cart: {
    totalprice: 0,
    totalQuantity: 0,
    items: []
  }
};

describe('cart reducer', () => {
  it('returns the initial state when user gets cart', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the correct state when user gets cart', () => {
    const action = {
      type: types.GET_CART,
      cart: {
        cart: {
          cart: {
            items: [],
            totalprice: 25000,
            totalQuantity: 50
          }
        }
      }
    };
    expect(cartReducer(initialState, action)).toEqual({
      ...initialState,
      totalprice: 25000,
      totalQuantity: 50,
      items: []
    });
  });
  it('returns the correct state when user adds to cart', () => {
    const action = {
      type: types.PLACE_ORDER
    };
    expect(cartReducer(initialState, action)).toEqual({
      ...initialState,
      totalprice: 0,
      totalQuantity: 0,
      items: []
    });
  });
});
