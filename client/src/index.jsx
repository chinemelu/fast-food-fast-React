import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
// import store from './store';
import Routes from './routes';
import './styles/styles.scss';
import { setCurrentUser } from './actions/loginActions';
import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);


if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}


render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('root')
);
