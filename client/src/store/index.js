import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';


export default () => {
  const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
  );

  return store;
};
