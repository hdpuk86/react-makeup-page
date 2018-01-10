import React from 'react';
import ImageBox from './imageBox';

class MakeupBox extends React.Component {

  render(){
    return(
      <React.Fragment>
        <h1>COSMETICS</h1>
        <ImageBox/>
        {/* brandselector
        productcontainer */}
      </React.Fragment>
    )
  }

}

export default MakeupBox;
