import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GuestNavbar = cart => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link to="customerpage.html">Our Products</Link>
      <Link
        to="/login"
      >
        Login/Register
      </Link>
      <Link to="customercart.html">
        <i className="fas fa-shopping-cart" />
        <span className="total-cart-quantity">
          {cart.cart.cart.totalQuantity || cart.totalQuantity}
        </span>
      </Link>
      <Link id="app-name" to="landingpage.html">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

export default GuestNavbar;
