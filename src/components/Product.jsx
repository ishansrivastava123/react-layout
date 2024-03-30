import React from 'react';
import "../styles/product.css";

const Product = (props) => {
  return (
    <div className='product'>
        <div className="product-description">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        <p>{props.stock} in stock</p>
        <p>$ {props.price}</p>
        <p>{props.sales}</p>
    </div>
  )
}

export default Product