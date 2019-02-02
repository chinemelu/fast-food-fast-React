import {
  SET_CURRENT_USER
} from '../actionTypes';

const initialState = {
  isAuthenticated: null,
  authenticated: false,
  token: '',
  platform: '',
  userInfo: {}
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.userInfo
        && Object.keys(action.userInfo).length > 0,
        userInfo: action.userInfo
      };
    default: return state;
  }
};

export default authReducer;
