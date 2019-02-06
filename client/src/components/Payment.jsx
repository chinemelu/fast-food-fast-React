import React from 'react';
import PropTypes from 'prop-types';
import { TextFieldGroup } from './index';


const Payment = ({
  onChange,
  errors,
  deliveryAddress,
  mobileNumber,
  onSubmit
}) => (
  <React.Fragment>
    <section id="delivery-details-section">
      <form onSubmit={onSubmit}>
        <h1>Delivery Details</h1>

        <TextFieldGroup
          error={errors && errors.deliveryAddress}
          placeholder="Delivery Address"
          field="deliveryAddress"
          value={deliveryAddress}
          onChange={onChange}
          feedbackClass="cd-address-error-message is-visible"
          className="address"
        />

        <TextFieldGroup
          error={errors && errors.mobileNumber}
          placeholder="Mobile Number"
          field="mobileNumber"
          type="number"
          value={mobileNumber}
          className="mobilenumber"
          onChange={onChange}
          feedbackClass="cd-mobile-error-message is-visible"
        />

        <TextFieldGroup
          type="submit"
          value="Order"
          className="order-btn"
        />
      </form>
    </section>
  </React.Fragment>
);


Payment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  mobileNumber: PropTypes.number,
  deliveryAddress: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Payment;
