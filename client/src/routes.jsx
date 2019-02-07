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
  ProductsPage,
  ShoppingCartPage,
  OrderHistoryPage
} from './views';

import HomePageRedirect from './utils/HomePageRedirect';
import PaymentPage from './views/PaymentPage';


const routes = (
  <BrowserRouter>
    <Switch>
      <LayoutContainer path="/login" component={HomePageRedirect(LandingPageView)} layout={PreLoginLayout} />
      <LayoutContainer path="/products" component={ProductsPage} layout={AfterLoginLayout} />
      <LayoutContainer path="/cart" component={ShoppingCartPage} layout={AfterLoginLayout} />
      <LayoutContainer path="/order" component={PaymentPage} layout={AfterLoginLayout} />
      <LayoutContainer path="/order-history" component={OrderHistoryPage} layout={AfterLoginLayout} />
    </Switch>
  </BrowserRouter>
);

export default routes;
