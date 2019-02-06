import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import Payment from '../components/Payment';
import paymentPageValidation from '../utils/paymentPageValidation';
import { placeOrderRequest } from '../actions/orderActions';
import { addFlashMessage } from '../actions/flashActions';


class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryAddress: '',
      mobileNumber: '',
      errors: {},
      isLoading: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOrderRequest = async (e) => {
    e.preventDefault();
    const {
      addBannerMessage,
      history,
      createOrderRequest
    } = this.props;
    if (this.isValidDeliveryDetails()) {
      this.setState({ errors: {}, isLoading: true });
      const placeOrderResponse = await createOrderRequest(this.state);
      if (placeOrderResponse) {
        this.setState({ isLoading: false });
        if (placeOrderResponse.status === 201) {
          history.push('/products');
          addBannerMessage({
            type: 'success',
            text: 'Order Placed Successfully'
          });
        } else {
          addBannerMessage({
            type: 'warning',
            text: `${placeOrderResponse.errors}`
          });
        }
      }
    }
  }

  isValidDeliveryDetails() {
    const errors = paymentPageValidation(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  render() {
    const {
      mobileNumber,
      deliveryAddress,
      errors,
      isLoading
    } = this.state;
    return (

      <Payment
        onSubmit={this.handleOrderRequest}
        deliveryAddress={deliveryAddress}
        mobileNumber={mobileNumber}
        errors={errors}
        isLoading={isLoading}
        onChange={this.handleChange}
      />
    );
  }
}


PaymentPage.propTypes = {
  addBannerMessage: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  createOrderRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addBannerMessage: addFlashMessage,
  createOrderRequest: placeOrderRequest
};


export default connect(null, mapDispatchToProps)(PaymentPage);
