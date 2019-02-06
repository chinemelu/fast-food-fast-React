import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footerText, className }) => (
  <footer className={className}>
    <p>
      {footerText}
      &copy; 2018
    </p>
  </footer>
);


Footer.propTypes = {
  footerText: PropTypes.string,
  className: PropTypes.string
};

Footer.defaultProps = {
  footerText: 'Food Direct'
};

export default Footer;
