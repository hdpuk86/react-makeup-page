import React from 'react';

class BrandSelector extends React.Component {

  render(){
    return(
      <select className="BrandSelector">
        <option selected disabled>Choose a brand</option>
      </select>
    )
  }

}

export default BrandSelector;
