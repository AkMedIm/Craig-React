import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link} from 'react-router-dom'
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesData:[]
    };

  }


  componentDidMount(){
    const {match, history} = this.props
    if(match.params.city == undefined){
      history.push('/marrakech')
    }

    const self = this;
    axios.get(`/api/${match.params.city}`)
  .then(function (response) {
    self.setState({
      categoriesData:response.data,
    },
    () => { console.log(self.state);}
  )
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });
  }


  loopcategories = () => {
    const {match, history} = this.props
    return this.state.categoriesData.map((category, i) => {
    const loopListings = () => {
      return category.listings.map((listing, index) => {
        return (
          <Link to = {`/${match.params.city}/${category.slug}/${listing.slug}`} key={index} >
            {listing.name}
          </Link>
             	)
      })
    }
      return (
        <div key={i} className="categories">
          <Link to={`/${match.params.city}/${category.slug}`} className="title">{category.title}</Link>
          <div className="group-links">
            {loopListings()}
          </div>
        </div>
      );
    });
  };
  loopTags = () => {
    let testTags = ["1", "2", "3", "4", "5", "6","7","8","9","10","11"];
    return testTags.map((item, i) => (
      <div key={i} className="tag"> Apple macbook </div>
    ));
  };
  render() {
    return (
      <div className="home">
        <div className="container2">
          <h1>
            Connecting people <br /> everywhere :)
          </h1>
          <section className="links">{this.loopcategories()}</section>
            </div>
            <div className="container">
          <section className="trending">
          <input placeholder="Search Housing, Jobs, Personal, Services..." type="text" name="search" className="search"  />


            <div className="title">
              <i className="fa fa-clock-o" /> Trending now !
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
