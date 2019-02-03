
import React from 'react';
import jwt from 'jsonwebtoken';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashActions.js';
import logout from '../actions/logoutActions.js';

export default function (Component) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isUserAuthenticated && !this.props.isAdminAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You must be logged in to see this page'
        });
        this.props.history.push('/login');
      }

      if (this.props.isUserAuthenticated || this.props.isAdminAuthenticated) {
        const token = JSON.stringify(localStorage.getItem('jwtToken'));
        const decodedToken = jwt.decode(JSON.parse(token));
        if (token && decodedToken.exp < Date.now() / 1000) {
          this.props.logout();
        }
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isUserAuthenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    isUserAuthenticated: state.currentUser.isUserAuthenticated,
    isAdminAuthenticated: state.currentUser.isAdminAuthenticated
  });

  Authenticate.propTypes = {
    history: propTypes.objectOf(propTypes.string).isRequired,
    isUserAuthenticated: propTypes.bool.isRequired,
    isAdminAuthenticated: propTypes.bool.isRequired,
    addFlashMessage: propTypes.func.isRequired,
    logout: propTypes.func.isRequired
  };

  return connect(mapStateToProps, { addFlashMessage, logout })(Authenticate);
}
