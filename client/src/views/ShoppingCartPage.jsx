import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMenuRequest } from '../actions/menuActions';
import {
  Spinner,
  ShoppingCart,
  LinkButton,
  Footer
} from '../components';
import { addToCartRequest, fetchCartRequest } from '../actions/cartActions';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';
import FlashMessageList from '../components/FlashMessagesList';

class ShoppingCartPage extends Component {
  componentDidMount() {
    const { getCartRequest } = this.props;
    getCartRequest();
  }

  render() {
    const { cart } = this.props;

    if (!Array.isArray(cart.items) || Object.keys(cart).length === 0) {
      return <Spinner />;
    }

    if (!cart.items.length) {
      return <h1>There are no items in this cart</h1>;
    }


    const cartView = cart.items.map(cartItem => (
      <ShoppingCart
        key={cartItem.id}
        cartItem={cartItem}
        cart={cart}
        handleChange={this.handleChange}
        value={cartItem.quantity}
      />
    ));
    return (
      <React.Fragment>
        <section id="shopping-cart">
          <FlashMessageList />
          <h1 className="main-heading">Shopping Cart</h1>
          <table>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {cartView}
          </table>
          <div>
            <div className="sub-total">
              <h1>
             Subtotal(
                {cart.totalQuantity}
            items):  #
                {cart.totalprice}
              </h1>
              <LinkButton
                className="proceed-btn"
                buttonValue="Proceed"
                to="/order"
              />
            </div>
          </div>
        </section>
        <Footer
          className="shopping-cart-footer"
        />
      </React.Fragment>


    );
  }
}


ShoppingCartPage.propTypes = {
  cart: PropTypes.objectOf(PropTypes.string).isRequired,
  getCartRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getMenuRequest,
  addItemToCartRequest: addToCartRequest,
  getCartRequest: fetchCartRequest,
  addBannerMessage: addFlashMessage,
  clearBannerMessages: clearFlashMessages
};

const mapStateToProps = state => ({
  cart: state.userCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
