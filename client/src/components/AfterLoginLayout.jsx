import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../views/Navbar';

const AfterLoginLayout = props => (
  <div>
    <Navbar {...props} />
    {props.children}
  </div>
);


AfterLoginLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired
};

export default AfterLoginLayout;
