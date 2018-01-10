import React from 'react';

class BrandSelector extends React.Component {

  constructor(props){
    super(props);
    this.handleSelectBrand = this.handleSelectBrand.bind(this);
  }

  handleSelectBrand(event){
    this.props.handleBrandChange(event.target.value);
  }

  render(){
    const brands = ["almay", "annabelle", "benefit", "clinique", "covergirl", "dior", "e.l.f.", "essie", "fenty", "glossier", "iman",
    "l'oreal", "marcelle", "maybelline", "milani", "misa", "moov", "nyx", "orly", "pacifica", "revlon", "sante", "smashbox", "stila", "suncoat", "zorah"];
    const options = brands.map((brand) => {
      return <option key={brand} value={brand}>{brand}</option>
    })
    return(
      <div className="selector">
        <h3>Pick a brand:</h3>
        <select className="BrandSelector" onChange={this.handleSelectBrand}>
          {options}
        </select>
      </div>
    )
  }

}

export default BrandSelector;
