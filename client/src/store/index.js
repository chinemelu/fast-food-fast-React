import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunkMiddleware,
  authStateMiddleware
);

const composeEnhancers =    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
);
export default store;
