import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../_reducers';

const middleware = [thunk];

const useReduxDevTools = () => (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = compose(
    applyMiddleware(...middleware)
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(...middleware, logger),
    useReduxDevTools()
  )(createStore);
}

export const store = createStoreWithMiddleware(rootReducer);

export default store;
