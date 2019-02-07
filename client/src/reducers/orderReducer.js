import {
  GET_MY_ORDER_HISTORY
} from '../actionTypes';

const initialState = [];

const orderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MY_ORDER_HISTORY:
      return action.orderHistory;
    default: return state;
  }
};

export default orderReducer;
