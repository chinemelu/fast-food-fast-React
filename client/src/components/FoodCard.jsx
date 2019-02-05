import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const FoodCard = ({ item, handleAddItemToCart }) => (
  <React.Fragment>
    <div className="food-item">
      <img src={item.img_url} />
      <h1>{item.name}</h1>
      <h3 id="listing-price">{`#${item.price}`}</h3>
      <Button
        onClick={() => { handleAddItemToCart(item.id, item.name); }}
        buttonValue="ADD TO CART"
        className="add-to-cart"
      />
    </div>
  </React.Fragment>
);

FoodCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired
};


export default FoodCard;
