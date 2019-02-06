import React from 'react';
import propTypes from 'prop-types';
import FlashMessageList from './FlashMessagesList.jsx';
import Footer from './Footer.jsx';

const PreLoginLayout = props => (
  <div>
    {props.children}
    <Footer
      className="landing-page-footer"
    />
  </div>
);

PreLoginLayout.propTypes = {
  children: propTypes.object.isRequired,
};


export default PreLoginLayout;
