import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LayoutContainer,
  PreLoginLayout,
  AfterLoginLayout
} from './components/index';

import {
  LandingPageView,
  ProductsPage
} from './views/index';

import HomePageRedirect from './utils/HomePageRedirect';

const routes = (
  <BrowserRouter>
    <Switch>
      <LayoutContainer path="/login" component={HomePageRedirect(LandingPageView)} layout={PreLoginLayout} />
      <LayoutContainer path="/products" component={ProductsPage} layout={AfterLoginLayout} />
    </Switch>
  </BrowserRouter>
);

export default routes;
