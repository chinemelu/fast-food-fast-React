import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ signout, cart }) => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link to="/products">Our Products</Link>
      <Link to="/order-history">My Order History</Link>
      <Link to="/admin">Admin</Link>
      <Link to="#" onClick={signout}>Logout</Link>
      <Link to="/cart">
        <i className="fas fa-shopping-cart" />
        <span className="total-cart-quantity">
          {cart.totalQuantity}
        </span>
      </Link>
      <Link id="app-name" to="landingpage.html">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

AdminNavbar.propTypes = {
  signout: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.string)
};

export default AdminNavbar;
