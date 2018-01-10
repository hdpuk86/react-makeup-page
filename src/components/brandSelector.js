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
    const brands = ["almay", "anna sui", "annabelle", "benefit", "burts bees", "butter london", "cargo cosmetics", "china glaze", "clinique", "covergirl", "dalish", "dior", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier", "iman",
    "l'oreal", "marcelle", "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nyx", "orly", "pacifica",
    "physicians formula", "piggy paint", "pure anada", "revlon", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat", "wet n wild", "zorah"];
    const options = brands.map((brand) => {
      return <option key={brand} value={brand}>{brand}</option>
    })
    return(
      <select className="BrandSelector" onChange={this.handleSelectBrand}>
        {options}
      </select>
    )
  }

}

export default BrandSelector;
