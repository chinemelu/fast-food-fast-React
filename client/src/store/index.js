/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const devTools = [
  applyMiddleware(thunk),
];

export const store = createStore(
  rootReducer,
  compose(...devTools)
);


export default store;
