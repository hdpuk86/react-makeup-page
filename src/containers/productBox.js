import React from 'react';
import Product from '../components/product.js';

class ProductBox extends React.Component {

  render(){
    if(!this.props.products){
      return null;
    }
    const productList = this.props.products.map((product) => {
      return <Product details={product} key={product.id}/>
    });
    return(
      <ul>
        {productList}
      </ul>
    )
  }

}

export default ProductBox;
