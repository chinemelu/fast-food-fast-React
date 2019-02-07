
import jwt from 'jsonwebtoken';
import { Post } from '../utils/axiosMethods';
import { SET_CURRENT_USER } from '../actionTypes/index';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo
});

export const signupRequest = userData => async (dispatch) => {
  try {
    const sentData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.signupEmail,
      password: userData.signupPassword,
      reEnterPassword: userData.confirmPassword
    };

    const signupResponse = await Post('/auth/signup', sentData);

    const { token } = signupResponse;
    const decodedToken = jwt.decode((token));
    localStorage.setItem('token', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(decodedToken));
    return signupResponse;
  } catch (error) {
    return error.response.data;
  }
};
