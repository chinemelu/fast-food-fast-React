import React from 'react';
import PropTypes from 'prop-types';
import spinnerImg from '../styles/images/ajax-loader.gif';

const Spinner = ({ hideClassName }) => (
  <div id="spinner" className={hideClassName}>
    <img id="img-spinner" src={spinnerImg} alt="loading" />
  </div>
);

Spinner.propTypes = {
  hideClassName: PropTypes.string
};

Spinner.defaultProps = {
  hideClassName: null
};

export default Spinner;
