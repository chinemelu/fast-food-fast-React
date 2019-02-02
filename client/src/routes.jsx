import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LayoutContainer,
  PreLoginLayout
} from './components/index.jsx';

import {
  LandingPageView
} from './views/index.js';

const routes = (
  <BrowserRouter>
    <Switch>
      <LayoutContainer path="/login" component={LandingPageView} layout={PreLoginLayout} />
    </Switch>
  </BrowserRouter>
);

export default routes;
