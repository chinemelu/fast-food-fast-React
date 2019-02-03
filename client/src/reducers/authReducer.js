import {
  SET_CURRENT_USER
} from '../actionTypes';

const initialState = {
  isUserAuthenticated: false,
  isAdminAuthenticated: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isUserAuthenticated: action.userInfo
        && Object.keys(action.userInfo).length > 0
        && action.userInfo.role === 'user',
        isAdminAuthenticated: action.userInfo
        && Object.keys(action.userInfo).length > 0
        && (action.userInfo.role === 'admin'
        || action.userInfo.role === 'superadmin'),
        userInfo: action.userInfo
      };
    default: return state;
  }
};

export default authReducer;
