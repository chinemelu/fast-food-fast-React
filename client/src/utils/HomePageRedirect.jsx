import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class HomePageRedirect extends React.Component {
    componentWillMount() {
      const { history, isUserAuthenticated, isAdminAuthenticated } = this.props;

      if (isUserAuthenticated || isAdminAuthenticated) {
        return history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    isUserAuthenticated: state.currentUser.isUserAuthenticated,
    isAdminAuthenticated: state.currentUser.isAdminAuthenticated
  });

  HomePageRedirect.propTypes = {
    isUserAuthenticated: PropTypes.bool.isRequired,
    isAdminAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.objectOf(PropTypes.string).isRequired
  };

  return connect(mapStateToProps, null)(HomePageRedirect);
}
