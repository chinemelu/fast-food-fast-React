import { combineReducers } from 'redux';
import flashMessages from './flashReducer';



const rootReducers = combineReducers({
  flashMessages,
});

export default rootReducers;
