import React from 'react';
import PropTypes from 'prop-types';

const SelectFieldGroup = ({
  value,
  field,
  handleChange,
  id,
  className,
  cartItem,
  cart,
}) => (
  <select
    value={value}
    className={className}
    id={id}
    name={field}
    onChange={handleChange}
  >
    <option value="">Please Select </option>
    {cart.items.map(cartItem => (
      <option key={cartItem.id} value={cartItem.quantity}>
        {cartItem.quantity}
      </option>
    ))}
  </select>

);


SelectFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  selectArray: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))
};

export default SelectFieldGroup;
