import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cityDropDown:false,
      selectedCity:'Marrakech',
      citiesData:[]
    };
  }

clickedCityDropDown = () => {
  this.setState({
    cityDropDown: !this.state.cityDropDown
  } ,

)};
selectCity = (city) => {
  this.setState({
    selectedCity: city
  },
  () => {
    let city = this.state.citiesData.filter((item) => {
      return item.title == this.state.selectedCity
    } )
    const {match, history} = this.props
      history.push(`/${city[0].slug}`)

  }
  )
}
loopCities = () => {
  return this.state.citiesData.map((item, i) => {
    return( <li key={i} onClick={this.selectCity.bind(null,item.title)}>{item.title}</li> )

  })
}

componentWillMount(){
  const self = this;
  axios.get(`/api/cities`)
.then(function (response) {
  const {match, history} = self.props
  let city = response.data.filter((item) => {
    return item.slug == match.params.city
  } )
  self.setState({
    citiesData:response.data,
    selectedCity:city[0].title
  },
  // () => { console.log(self.state);}
)
  // console.log(response.data);
})
.catch(function (error) {
  console.log(error)
});
}

  render() {
    const { match, location, history } = this.props;
    return (

      <header>
        <div className="left-menu">
          <Link to={`/${match.params.city}`} className="logo">Pretty Avito</Link>
          <div className="vertical" />
          <div className="citydropdown" onClick={this.clickedCityDropDown}>
            {this.state.selectedCity} <i className={`fa  ${(this.state.cityDropDown) ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            <div className={`scroll-area ${(this.state.cityDropDown) ? 'active' : ''} `}>
              <ul>
              {this.loopCities()}
              </ul>
            </div>
          </div>
        </div>
        <div className="right-menu">
          <div className="user-img">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true" />{" "}
          </div>
          <div className="user-dropdown">
            My account <i className="fa fa-chevron-down" />
          </div>
          <div className="post-btn">post now!</div>
        </div>
      </header>
    );
  }
}
