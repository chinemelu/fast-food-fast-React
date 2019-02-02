import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PreLoginNavbar = ({ onClickLoginRegistrationNavLink }) => (
  <div className="nav">
    <label id="hamburger" htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <Link to="customerpage.html">View Products</Link>
      <Link
        onClick={onClickLoginRegistrationNavLink}
        to="#"
      >
Login/Register

      </Link>
      <Link id="app-name" to="landingpage.html">Food-direct</Link>
    </div>
    <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
  </div>
);

PreLoginNavbar.propTypes = {
  onClickLoginRegistrationNavLink: PropTypes.func.isRequired
};

export default PreLoginNavbar;
