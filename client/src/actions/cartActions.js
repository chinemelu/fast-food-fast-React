import { Get } from '../utils/axiosMethods';
import { GET_CART, ADD_TO_CART } from '../actionTypes/index';

export const getCartActionCreator = cart => ({
  type: GET_CART,
  cart
});

export const addToCartActionCreator = () => ({
  type: ADD_TO_CART,
});

export const fetchCartRequest = () => async (dispatch) => {
  try {
    const fetchCartResponse = await Get('/cart');
    dispatch(getCartActionCreator(fetchCartResponse));
    return fetchCartResponse;
  } catch (error) {
    return error.response;
  }
};

export const addToCartRequest = id => async (dispatch) => {
  try {
    const addToCartResponse = await Get(`/cart/add-to-cart/${id}`);
    dispatch(addToCartActionCreator(addToCartResponse));
    return addToCartResponse;
  } catch (error) {
    return error.response;
  }
};
