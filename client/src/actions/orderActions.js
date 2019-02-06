import { Post } from '../utils/axiosMethods';
import { PLACE_ORDER, GET_MY_ORDERS } from '../actionTypes';

export const placeOrderActionCreator = () => ({
  type: PLACE_ORDER,
});

export const getMyOrdersActionCreator = () => ({
  type: GET_MY_ORDERS,
});

export const placeOrderRequest = deliveryData => async (dispatch) => {
  const sentData = {
    address: deliveryData.deliveryAddress,
    mobileNumber: deliveryData.mobileNumber
  };
  try {
    const placeOrderResponse = await Post('/orders', sentData);
    console.log(placeOrderResponse, 'RESPONSEEEE');
    dispatch(placeOrderActionCreator(placeOrderResponse));
    return placeOrderResponse;
  } catch (error) {
    return error.response;
  }
};
