import { Post, Get } from '../utils/axiosMethods';
import {
  PLACE_ORDER,
  GET_MY_ORDER_HISTORY
} from '../actionTypes';

export const placeOrderActionCreator = () => ({
  type: PLACE_ORDER,
});

export const getMyOrderHistoryActionCreator = orderHistory => ({
  type: GET_MY_ORDER_HISTORY,
  orderHistory
});

export const placeOrderRequest = deliveryData => async (dispatch) => {
  const sentData = {
    address: deliveryData.deliveryAddress,
    mobileNumber: deliveryData.mobileNumber
  };
  try {
    const placeOrderResponse = await Post('/orders', sentData);
    dispatch(placeOrderActionCreator(placeOrderResponse));
    return placeOrderResponse;
  } catch (error) {
    return error.response;
  }
};

export const getMyOrderHistoryRequest = userId => async (dispatch) => {
  try {
    const getMyOrderHistoryResponse = await Get(`/users/${userId}/orders`);
    dispatch(getMyOrderHistoryActionCreator(getMyOrderHistoryResponse));
    return getMyOrderHistoryResponse;
  } catch (error) {
    return error.response;
  }
};
