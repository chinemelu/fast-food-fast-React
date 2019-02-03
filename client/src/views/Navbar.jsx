import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavbar from '../components/UserNavbar.jsx';
import GuestNavbar from '../components/GuestNavbar.jsx';
import AdminNavbar from '../components/AdminNavbar.jsx';
import logout from '../actions/logoutActions.js';


class Navbar extends Component {
  onClick = (event) => {
    event.preventDefault();
    const {
      signout,
      children: {
        props: {
          history
        }
      }
    } = this.props;
    signout();

    history.push('/');
  }

  returnAppropriateNavbar = () => {
    const {
      signout,
      currentUser: {
        isAdminAuthenticated,
        isUserAuthenticated
      }
    } = this.props;

    if (isUserAuthenticated) {
      return (
        <UserNavbar
          signout={signout}
        />
      );
    }
    if (isAdminAuthenticated) {
      return (
        <AdminNavbar
          signout={signout}
        />
      );
    }
    return <GuestNavbar />;
  }

  render() {
    const returnAppropriateNavbar = this.returnAppropriateNavbar();

    return (
      <div>
        { returnAppropriateNavbar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUserAuthenticated: state.currentUser.isUserAuthenticated,
  isAdminAuthenticated: state.currentUser.isAdminAuthenticated
});

Navbar.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.string).isRequired,
  signout: PropTypes.func.isRequired,
  children: PropTypes.objectOf(PropTypes.string),
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired
};

Navbar.defaultProps = {
  children: {}
};

const mapDispatchToProps = {
  signout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
