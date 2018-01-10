import React from 'react';
import ImageBox from './imageBox';
import BrandSelector from '../components/brandSelector.js';
import ProductBox from './productBox';

class MakeupBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      selectedBrand: "almay"
    }
  }

  componentDidMount(){
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + this.state.selectedBrand;
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

  render(){
    return(
      <div className="makeup-box">
        <h1>COSMETICS</h1>
        <ImageBox/>
        <BrandSelector/>
        <ProductBox/>
      </div>
    )
  }

}

export default MakeupBox;
