import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonValue, className, onClick }) => (
  <button
    className={className}
    type="button"
    onClick={onClick}
  >
    {buttonValue}
  </button>

);

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
