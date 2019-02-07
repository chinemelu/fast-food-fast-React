import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import {
  OrderHistory,
  Spinner
} from '../components';
import { getMyOrderHistoryRequest } from '../actions/orderActions';


class OrderHistoryPage extends Component {
  async componentDidMount() {
    const token = localStorage.getItem('token');
    const decodedToken = jwt.decode(token);
    const { userId } = decodedToken;
    const { fetchMyOrderHistoryRequest } = this.props;
    fetchMyOrderHistoryRequest(userId);
  }

  render() {
    const { myOrders } = this.props;

    if (Object.keys(myOrders).length === 0) {
      return <Spinner />;
    }

    if (myOrders.success === true && myOrders.data) {
      return <h1>There is no order history</h1>;
    }

    const myOrderHistory = myOrders.orders.map(order => (
      <OrderHistory
        key={order.id}
        order={order}
      />
    ));


    return (
      <React.Fragment>
        <section id="order-history">
          {myOrderHistory}
        </section>

      </React.Fragment>
    );
  }
}


OrderHistoryPage.propTypes = {
  fetchMyOrderHistoryRequest: PropTypes.func.isRequired,
  myOrders: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapDispatchToProps = {
  fetchMyOrderHistoryRequest: getMyOrderHistoryRequest
};

const mapStateToProps = state => ({
  myOrders: state.userOrder
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage);
