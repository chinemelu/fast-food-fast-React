import React from 'react';
import PropTypes from 'prop-types';

const Carousel = () => (
  <React.Fragment>
    <section id="customer-page-cover-image" />
    <div className="heading">
      <h1>Our products</h1>
    </div>
  </React.Fragment>
);

Carousel.propTypes = {

};

Carousel.defaultProps = {
  customAlertClass: '',
  deleteBannerMessage: () => null
};

export default Carousel;
