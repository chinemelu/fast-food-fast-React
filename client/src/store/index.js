import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk,
);

const composeEnhancers =	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(thunk)
);
export default store;
