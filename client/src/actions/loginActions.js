
import jwt from 'jsonwebtoken';
import { Post } from '../utils/axiosMethods.js';
import { SET_CURRENT_USER } from '../actionTypes/index.js';
import setAuthorizationToken from '../utils/setAuthorizationToken.js';

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo
});

export const loginRequest = userData => async (dispatch) => {
  try {
    const sentData = {
      email: userData.email,
      password: userData.password
    };

    const loginResponse = await Post('/auth/login', sentData);

    const { token } = loginResponse;
    const decodedToken = jwt.decode((token));
    localStorage.setItem('token', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(decodedToken));
    return loginResponse;
  } catch (error) {
    return error.response.data;
  }
};
