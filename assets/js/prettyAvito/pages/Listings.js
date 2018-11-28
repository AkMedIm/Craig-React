import React, { Component } from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import axios from "axios"
import qs from "query-string"

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      itemsData:[],
      min_price:0,
      max_price:100000,
      select_view:'gallery',
      sort:'newest',
      make:''

    };
  }

  showMakeModel = () => {
    const { match, location, history } = this.props;
    if(match.params.listing == 'cars-and-trucks'){
      return(
        <div className="showingMake">
        <div className=" form-group make">
          <label htmlFor="make">MAKE</label>
          <select name="make" className="make" onChange={this.handleChange}>
            <option value="bmw">BMW</option>
            <option value="mclaren">McLaren</option>
            <option value="tesla">Tesla</option>
            <option value="maserati">Maserati</option>


          </select>
        </div>

        <div className=" form-group model">
          <label htmlFor="model">MODEL</label>
          <select name="model" className="model" onChange={this.handleChange}>
            <option value="All Models">All Models</option>
            <option value="x6">X6</option>
            <option value="x2">X2</option>
          </select>
        </div>

        <div className=" form-group miles">
          <label htmlFor="miles">Kilometers</label>
          <select name="miles" className="miles" onChange={this.handleChange}>
            <option value="50 Miles">8000 KM</option>
          </select>
        </div>
        </div>
      )
    }
  }

  componentWillMount(){
    const {match, history, location} = this.props
    const self = this;
    const queryParams = qs.parse(this.props.location.search)
    const { min_price, max_price, select_view, sort} = queryParams
  if(queryParams.min_price != undefined){
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`)
  .then(function (response) {
    self.setState({
      itemsData:response.data,
    },
    () => { console.log(self.state);}
  )
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });
  }else{
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}`)
  .then(function (response) {
    self.setState({
      itemsData:response.data,
    },
    () => { console.log(self.state);}
  )
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });
  }

  //   const {match, history} = this.props
  //   const self = this;
  //   axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}`)
  // .then(function (response) {
  //   self.setState({
  //     itemsData:response.data,
  //   },
  //   () => { console.log(self.state);}
  // )
  //   // console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.log(error)
  // });
  }
  handleChange  = (event) => {
    const name  = event.target.name
    const value = (event.target.type == 'checkbox') ?
    event.target.checked : event.target.value

    this.setState({
      [name] : value
    }, () => {
      console.log( this.state  );

    }
  )
  }

  loopItems = () => {
    const {match, history, location} = this.props
    if(this.state.itemsData != undefined){
      return this.state.itemsData.map((item, i) => {
        return (
          <div key={i} className="categories">
          <div className="item">
            <div className="image" style={{"backgroundImage": `url('${item.images[0]}')`}}>
              <div className="price">{item.price} DH</div>
              image
            </div>
            <div className="details">
            <Link to={`/${match.params.city}/${match.params.category}/${match.params.listing}/${item.title}`} key={i}>
            <h5>{item.title}<i className="fa fa-star-o"></i></h5>
            </Link>
              <h6>{item.city}</h6>
            </div>
          </div>
          </div>
        );
      });
    }
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className=" form-group price">
              <label htmlFor="price">PRICE</label>
              <div className="min-max">
                <select name="min-price" className="min-price">
                  <option value="0">0</option>
                </select>

                <select name="max-price" className="max-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>

      {this.showMakeModel()}

            <div className=" form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
          </div>

          <section id="list-view">
          <div className="container">
          <div className="white-box">
            <section className="change-view">
              <div className=" form-group view-dropdown">
                <select name="select-view" className="select-view">
                  <option value="galery">Gallery view</option>
                  <option value="list">List view</option>
                  <option value="thumb">Gallery view</option>
                </select>
              </div>

              <div className=" form-group sort-dropdown">
                <select name="sort-dropdown" className="sort-dropdown">
                  <option value="galery">Newest</option>
                </select>
              </div>
            </section>
            <section className="all-items">
              {this.loopItems()}
            </section>
            </div>
            </div>
          </section>

      </div>
    );
  }
}
