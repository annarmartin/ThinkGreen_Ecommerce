import React from 'react';
import data from '../data';

// define what each item should show on the page -- info will be populated from data.js

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="product">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p class="product_description">{product.description}</p>
      <div>${product.price}</div>
      <div>{product.stock}</div>
      <div>
        <button onClick={() => onAdd(product)}> Add To Cart</button>
      </div>
    </div>
  );
}