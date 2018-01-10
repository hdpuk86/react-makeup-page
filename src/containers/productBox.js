import React from 'react';
import Product from '../components/product.js';

class ProductBox extends React.Component {

  const productList = this.props.brand.map((product) => {
    return <Product details={product} key={product.id}/>
  })

  render(){
    return(
      <ul>
        {productList}
      </ul>
    )
  }

}

export default ProductBox;
