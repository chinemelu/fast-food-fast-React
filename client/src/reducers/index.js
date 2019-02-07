import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';


const rootReducers = combineReducers({
  currentUser: authReducer,
  flashMessages,
  currentMenu: menuReducer,
  userCart: cartReducer,
  userOrder: orderReducer
});

export default rootReducers;
