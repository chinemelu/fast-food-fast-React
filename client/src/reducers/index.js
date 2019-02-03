import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import authReducer from './authReducer';


const rootReducers = combineReducers({
  currentUser: authReducer,
  flashMessages
});

export default rootReducers;
