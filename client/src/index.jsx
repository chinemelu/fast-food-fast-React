import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import routes from './routes';
import './styles/styles.css';


render(
  <Provider store = {store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)