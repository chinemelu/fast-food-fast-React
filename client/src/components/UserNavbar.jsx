import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserNavbar = ({ logout }) => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link to="/">Our Products</Link>
      <Link to="/">My Order History</Link>
      <Link to="#" onClick={logout}>Logout</Link>
      <Link to=""><i className="fa fa-shopping-cart" /></Link>
      <Link id="app-name" to="/">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

UserNavbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default UserNavbar;
