import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const getComposeEnhancers = () => {
  if (window.navigator.userAgent.includes('Chrome')) {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return compose(applyMiddleware(thunk));
};

const store = createStore(rootReducer, getComposeEnhancers());

export default store;
