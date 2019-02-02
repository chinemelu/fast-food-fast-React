import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footerText }) => (
  <footer className="footer">
    <p>
      {footerText}
      &copy; 2018
    </p>
  </footer>
);


Footer.propTypes = {
  footerText: PropTypes.string
};

Footer.defaultProps = {
  footerText: 'Food Direct'
};

export default Footer;
