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
  constructor(props) {
    super(props);
    this.state = {
      isTextBoxVisible: false
    };
  }

  render() {
    const { cart } = this.props;
    const { isTextBoxVisible } = this.state;

    if (!cart || !Array.isArray(cart.items) || !(cart.items.length)) {
      return <Spinner />;
    }

    if (cart && Array.isArray(cart.items) && cart.items.length === 0) {
      return <h1 className="no-items-text">There are no items in this cart</h1>;
    }


    const cartView = cart.items.map(cartItem => (
      <ShoppingCart
        key={cartItem.id}
        cartItem={cartItem}
        cart={cart}
        handleChange={this.handleChange}
        value={cartItem.quantity}
        isTextBoxVisible={isTextBoxVisible}
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
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(PropTypes.string).isRequired,
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
