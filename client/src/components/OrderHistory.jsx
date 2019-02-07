import React from 'react';
import PropTypes from 'prop-types';
import orderIdGenerator from '../utils/orderIdGenerator';

const OrderHistory = ({ order }) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric'
  };
  return (
    <React.Fragment>
      <table>
        <tr>
          <th>Date</th>
          <th>Total</th>
          <th>
            Order #
            {orderIdGenerator(order.order.id, new Date(order.order.date))}
          </th>
        </tr>
        <tr>
          <td>
            {new Date(order.order.date).toLocaleString('en-US', options)}
          </td>
          <td className="total-price">
            {order.order.total}
          </td>
          <td />
        </tr>


        {order.order.items.map(item => (
          <tr>
            <td>
              <div className="order" />


              <div className="order-image">
                <img src={item.img_url} />
              </div>
            </td>
            <td>
              <div className="order-details">
                <p className="order-name">
                  {item.name}
                </p>
                <p>
                  Qty:
                  {item.quantity}
                </p>
                <p>{item.price}</p>
              </div>
            </td>
            <td />
          </tr>
        ))}
      </table>

    </React.Fragment>


  );
};


export default OrderHistory;
