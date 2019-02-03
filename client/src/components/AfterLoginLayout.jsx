import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../views/Navbar.jsx';
import FlashMessageList from './FlashMessagesList.jsx';
import Footer from './Footer.jsx';

const AfterLoginLayout = props => (
  <div>
    <Navbar {...props} />
    <FlashMessageList />
    {props.children}
    <Footer />
  </div>
);


AfterLoginLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired
};

export default AfterLoginLayout;
