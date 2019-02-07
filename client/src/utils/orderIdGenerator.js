const orderIdGenerator = (orderId, orderDate) => `${orderId
  .slice(0, 4)}${orderDate.toLocaleDateString('en-GB')
  .slice(0, 2)}${orderDate.toLocaleDateString('en-GB')
  .slice(3, 5)}${orderDate.toLocaleDateString('en-GB')
  .slice(6, 11)}`;

export default orderIdGenerator;
