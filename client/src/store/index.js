import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
