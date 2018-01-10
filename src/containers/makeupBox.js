import React from 'react';
import ImageBox from './imageBox';
import BrandSelector from '../components/brandSelector.js';


class MakeupBox extends React.Component {

  render(){
    return(
      <div className="makeup-box">
        <h1>COSMETICS</h1>
        <ImageBox/>
        <BrandSelector/>
        {/* productcontainer */}
      </div>
    )
  }

}

export default MakeupBox;
