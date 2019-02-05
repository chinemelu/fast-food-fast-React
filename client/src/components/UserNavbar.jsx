import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserNavbar = ({ signout, cart }) => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link to="/products">Our Products</Link>
      <Link to="/">My Order History</Link>
      <Link to="#" onClick={signout}>Logout</Link>
      <Link to="">
        <i className="fas fa-shopping-cart" />
        <span className="total-cart-quantity">
          {cart.totalQuantity}
        </span>
      </Link>
      <Link id="app-name" to="/">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

UserNavbar.propTypes = {
  signout: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.string).isRequired
};

export default UserNavbar;
