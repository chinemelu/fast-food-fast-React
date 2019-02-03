import setAuthorizationToken from '../utils/setAuthorizationToken.js';
import { setCurrentUser } from './loginActions.js';

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export default logout;
