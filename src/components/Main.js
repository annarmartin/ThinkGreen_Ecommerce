

import React from 'react';
import Product from './Product';

// header of the page
export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <p>Welcome to Think Green! We’re a multinational non profit organization supplying gardeners small and large with organic seeds, saplings, and produce. We offer distribution in the United States, Canada, Mexico, Australia, and Indonesia!</p>
      <h2>Herbs</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}