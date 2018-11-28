import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery.js"
import axios from "axios";
import qs from "query-string"

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      itemsData:[],
    };
  }


  componentWillMount(){
    const {match, history, location} = this.props
    const self = this;
    const queryParams = qs.parse(this.props.location.search)
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}/${match.params.item}`)
  .then(function (response) {
    self.setState({
      itemsData:response.data,
    },
    () => { console.log(self.state);}
  )
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });

  }
showCarInfo = () => {
  const { match, location, history } = this.props;

  if(match.params.listing == 'cars-and-trucks'){
    return this.state.itemsData.map( (item,i) => {
      return (
        <div key={i} className="car-info">
          <div className="date">Posted: Nov 27th </div>
          <h3 className="title">{item.title}<i className="fa fa-star-o"></i></h3>
          <h4 className="price">{item.price}</h4>
          <div className="more-details">
            <div className="info">
              <label htmlFor="Vin">Vin</label>
              <h5>{item.extraDetails.vin}</h5>
            </div>
            <div className="info">
              <label htmlFor="Mileage">Milage</label>
              <h5>{item.extraDetails.milage}</h5>
            </div>
            <div className="info">
              <label htmlFor="Transmission">Transmission</label>
              <h5>{item.extraDetails.transmission}</h5>
            </div>
            <div className="info">
              <label htmlFor="Vin">fuel</label>
              <h5>{item.extraDetails.fuel}</h5>
            </div>
            <div className="info">
              <label htmlFor="Mileage">exterior color</label>
              <h5>{item.extraDetails.exteriorColor}</h5>
            </div>
            <div className="info">
              <label htmlFor="Transmission">drive</label>
              <h5>{item.extraDetails.drive}</h5>
            </div>
            <div className="info">
              <label htmlFor="Vin">type</label>
              <h5>{item.extraDetails.type}</h5>
            </div>
            <div className="info">
              <label htmlFor="Mileage">interior color</label>
              <h5>{item.extraDetails.InteriorColor}</h5>
            </div>
            <div className="info">
              <label htmlFor="Transmission">condition</label>
              <h5>{item.extraDetails.condition}</h5>
            </div>
          </div>
          </div>
      )
    } )

  }

}

loopItemDetails = (item) => {
  const {match, location, history} = this.props
  if(this.state.itemsData != undefined){
    return this.state.itemsData.map((item,i) => {
      return (
        <div key={i} className="details-column">
          {this.showCarInfo()}
          <hr/>
          <div className="description">
          <label htmlFor="description">description</label>
          <p>{item.description}</p>
          </div>
        </div>
      )
    })
  }
}

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
        <div className="white-box">
          <section className="submenu">
            <div className="direction">
              <a href="#" className="prev">Prev</a>
              <div className="vertical"></div>
              <a href="#" className="next">Next</a>
            </div>
            <nav className="sublinks">
              <a href="">More Ads by User</a>
              <div className="vertical"></div>
              <a href="">Print</a>
              <div className="vertical"></div>
              <a href="">Share</a>
              <a href="">Contact Seller <i className="fa fa-angle-down"></i> </a>
            </nav>
          </section>
          <section className="content-area">
            <div className="media-column">

            <Gallery />

            </div>
            {this.loopItemDetails()}
          </section>
          </div>
        </div>
      </div>
    );
  }
}
