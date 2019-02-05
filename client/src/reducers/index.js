import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';


const rootReducers = combineReducers({
  currentUser: authReducer,
  flashMessages,
  currentMenu: menuReducer,
  userCart: cartReducer
});

export default rootReducers;
