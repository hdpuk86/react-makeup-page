import React from 'react';

const Product = (props) => {
  const details = props.details;
  return(
    <div className="product">
      <img src={details.image_link} alt={details.name}/>
      <ul>
        <li className="product-name">{details.name}</li>
        <li className="product-descr">{details.description}</li>
      </ul>
    </div>
  )
}

export default Product;
