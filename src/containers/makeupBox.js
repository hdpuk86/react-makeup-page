import React from 'react';
import ImageBox from './imageBox';
import BrandSelector from '../components/brandSelector.js';
import ProductBox from './productBox';

class MakeupBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: []
    }
    this.handleBrandChange = this.handleBrandChange.bind(this);
  }

  makeRequest(url){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({products: data});
      }
    })
    request.send();
  }

  componentDidMount(){
    this.makeRequest("https://makeup-api.herokuapp.com/api/v1/products.json?brand=almay");
  }

  handleBrandChange(newBrand){
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=" + newBrand;
    this.makeRequest(url);
  }

  render(){
    return(
      <div className="makeup-box">
        <h1>COSMETICS</h1>
        <ImageBox products={this.state.products}/>
        <BrandSelector handleBrandChange={this.handleBrandChange}/>
        <ProductBox products={this.state.products}/>
      </div>
    )
  }

}

export default MakeupBox;
