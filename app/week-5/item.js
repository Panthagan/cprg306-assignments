import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <span>Name: {name}</span>
      <span>Quantity: {quantity}</span>
      <span>Category: {category}</span>
    </li>
  );
};

export default Item;
