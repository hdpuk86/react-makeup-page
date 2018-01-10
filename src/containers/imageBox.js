import React from 'react';

class ImageBox extends React.Component {

  // constructor(props){
  //   super(props);

  // }
  //
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomProducts(numProducts, products){
    const randomIndex = this.getRandomInt(0, numProducts);
    const randomProducts = [];
    randomProducts[0] = products[randomIndex];
    randomProducts[1] = products[randomIndex + 1];
    randomProducts[2] = products[randomIndex + 2];
    return randomProducts;
  }

  render(){
    if(this.props.products.length == 0){
      return null;
    }
    const products = this.props.products;
    const numProducts = this.props.products.length;
    const randomProducts = this.getRandomProducts(numProducts, products);
    console.log(randomProducts);
    const images = randomProducts.map((product) => {
      return <img src={product.image_link} key={product.name} alt={product.name} height="250px"/>
    })

    return(
      <div className="image-box">
        {images}
      </div>
    )
  }

}

export default ImageBox;
