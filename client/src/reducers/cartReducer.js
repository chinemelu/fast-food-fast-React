import {
  GET_CART, ADD_TO_CART, PLACE_ORDER
} from '../actionTypes';

const initialState = {
  cart: {
    totalprice: 0,
    totalQuantity: 0,
    items: []
  }
};

let initialCartQuantity;
const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        totalprice: action.cart.cart.cart.totalprice,
        totalQuantity: action.cart.cart.cart.totalQuantity,
        items: action.cart.cart.cart.items
      };
    case ADD_TO_CART:
      initialCartQuantity = localStorage.getItem('initialCartQuantity');
      return {
        ...state,
        totalQuantity: parseInt(initialCartQuantity, 10) + 1,
      };
    case PLACE_ORDER:
      return {
        ...state,
        totalprice: 0,
        totalQuantity: 0,
        items: []
      };
    default: return state;
  }
};

export default cartReducer;
