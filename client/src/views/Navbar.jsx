import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavbar from '../components/UserNavbar';
import GuestNavbar from '../components/GuestNavbar';
import AdminNavbar from '../components/AdminNavbar';
import logout from '../actions/logoutActions';
import { fetchCartRequest } from '../actions/cartActions';
import Spinner from '../components/Spinner';


class Navbar extends Component {
  componentDidMount() {
    const { getCartRequest } = this.props;
    getCartRequest();
  }


  handleSignout = (event) => {
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

    history.push('/products');
  }

  returnAppropriateNavbar = () => {
    const {
      isAdminAuthenticated, isUserAuthenticated, cart
    } = this.props;
    if (isUserAuthenticated) {
      return (
        <UserNavbar
          signout={this.handleSignout}
          cart={cart}
        />
      );
    }
    if (isAdminAuthenticated) {
      return (
        <AdminNavbar
          signout={this.handleSignout}
          cart={cart}
        />
      );
    }
    return (
      <GuestNavbar
        cart={cart}
      />
    );
  }

  render() {
    const { cart } = this.props;
    localStorage.setItem('initialCartQuantity', cart.totalQuantity || 0);

    if (Object.keys(cart).length === 0) {
      return <Spinner />;
    }
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
  isAdminAuthenticated: state.currentUser.isAdminAuthenticated,
  cart: state.userCart
});

Navbar.propTypes = {
  signout: PropTypes.func.isRequired,
  children: PropTypes.objectOf(PropTypes.string),
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
  getCartRequest: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.string).isRequired
};

Navbar.defaultProps = {
  children: {}
};

const mapDispatchToProps = {
  signout: logout,
  getCartRequest: fetchCartRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
