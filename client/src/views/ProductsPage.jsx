import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from '../components/Carousel';
import FoodCard from '../components/FoodCard';
import { getMenuRequest } from '../actions/menuActions';
import { Spinner } from '../components/index';
import { addToCartRequest, fetchCartRequest } from '../actions/cartActions';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';
import FlashMessageList from '../components/FlashMessagesList';


class ProductsPage extends Component {
  componentDidMount() {
    const { getMenuRequest } = this.props;
    getMenuRequest();
  }

  handleAddItemToCart = async (id, itemName) => {
    const { addItemToCartRequest, addBannerMessage, clearBannerMessages } = this.props;
    clearBannerMessages();
    const addItemResponse = await addItemToCartRequest(id);
    if (addItemResponse) {
      addBannerMessage({
        type: 'success',
        text: `${itemName} added to cart`
      });
    }
  }

  render() {
    const { fetchedMenu } = this.props;

    const menu = fetchedMenu.map(item => (
      <FoodCard
        key={item.id}
        item={item}
        handleAddItemToCart={this.handleAddItemToCart}
      />
    ));

    return (
      <React.Fragment>
        <Spinner
          hideClassName={
          !Array.isArray(fetchedMenu) && fetchedMenu.length ? '' : 'hide'
        }
        />
        <div>
          <Carousel />
          <section id="food-list">
            <FlashMessageList
              customAlertClass="products-banner-msg"
            />
            {menu}
          </section>
        </div>
      </React.Fragment>
    );
  }
}


ProductsPage.propTypes = {
  getMenuRequest: PropTypes.func.isRequired,
  fetchedMenu: PropTypes.func.isRequired,
  addItemToCartRequest: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getMenuRequest,
  addItemToCartRequest: addToCartRequest,
  getCartRequest: fetchCartRequest,
  addBannerMessage: addFlashMessage,
  clearBannerMessages: clearFlashMessages
};

const mapStateToProps = state => ({
  fetchedMenu: state.currentMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
