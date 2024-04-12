import React from 'react';

export default function ProductInfo(props) {
  const product = props.location.state.product;

  return (
    <div className="product-info-container">
      <h1>{product.item_name}</h1>
      <img src={product.image_filename} alt={product.item_name} />
      <p>Price: ${product.price}</p>
      {/* Display other product details as needed */}
    </div>
  );
}