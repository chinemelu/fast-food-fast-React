import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


const LayoutContainer = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

LayoutContainer.propTypes = {
  component: PropTypes.objectOf(PropTypes.string).isRequired,
  layout: PropTypes.objectOf(PropTypes.string).isRequired
};

export default LayoutContainer;
