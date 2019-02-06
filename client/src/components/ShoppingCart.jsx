import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SelectFieldGroup from './SelectFieldGroup';


const ShoppingCart = ({
  cartItem,
  handleChange,
  value,
  field,
  cart
}) => (
  <React.Fragment>
    <tr>
      <td>
        <div className="image-details">
          <div className="image">
            <img src={cartItem.img_url} />
          </div>
          <div className="image-name">
            <h1>{cartItem.name}</h1>
            <Link to="#">Delete</Link>
          </div>
        </div>
      </td>
      <td className="price-data">
        <h1>{cartItem.price}</h1>
      </td>
      <td className="quantity-data">
        <SelectFieldGroup
          className="cart-item-quantity"
          handleChange={handleChange}
          value={value}
          field={field}
          cartItem={cartItem}
          cart={cart}
        />
      </td>
    </tr>
  </React.Fragment>
);

ShoppingCart.propTypes = {
  cartItem: PropTypes.objectOf(PropTypes.string),
  cart: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  field: PropTypes.string,
};

export default ShoppingCart;
