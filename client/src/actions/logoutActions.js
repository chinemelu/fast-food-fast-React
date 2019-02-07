import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './loginActions';

const logout = () => (dispatch) => {
  window.localStorage.clear();
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export default logout;
