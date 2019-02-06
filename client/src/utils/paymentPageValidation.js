const paymentPageValidation = (data) => {
  const errors = {};

  if (!data.deliveryAddress.trim()) {
    errors.deliveryAddress = 'Delivery Address is required';
  }

  if (data.mobileNumber.trim() && !/^\d{11}$/.test(data.mobileNumber.trim())) {
    errors.mobileNumber = 'Phone number must be 11 digits';
  }
  return errors;
};

export default paymentPageValidation;
