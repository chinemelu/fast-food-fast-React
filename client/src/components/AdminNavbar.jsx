import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ logout }) => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link href="customerpage.html">Our Products</Link>
      <Link href="orderhistory.html">My Order History</Link>
      <Link href="adminpage.html">Admin</Link>
      <Link href="landingpage.html">Logout</Link>
      <Link href="customercart.html"><i className="fa fa-shopping-cart" /></Link>
      <Link id="app-name" href="landingpage.html">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

export default AdminNavbar;
