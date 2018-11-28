import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs:'',
      currentImg:'',
      currentIndex:0,

    };

  }

  componentWillMount(){
    const allImgs = [
      '/img/maserati-granturismo.jpg',
      '/img/maserati-granturismo-interior.jpg',
      '/img/seats.jpg',
      '/img/maserati.jpg',
      '/img/mass.jpg',
      '/img/MASERATI_front.jpg',
    ];

    this.setState({
      allImgs,
      currentImg:allImgs[this.state.currentIndex],
    })
  }

  allImgsloop = () =>{
    // console.log(this.state.allImgs)
    return this.state.allImgs.map((item, k)=>{
      return (
        <div onClick={this.clickedThumb.bind(null,k)} key={k} className="thumb-img" style={{"backgroundImage": `url('${item}')`}}></div>
      )
    })
  }

nextBtn =()=>{
  if(this.state.currentIndex != (this.state.allImgs.length -1 )){
    this.setState({
      currentIndex:this.state.currentIndex + 1
    })
  }
}


prevBtn = () =>{
  if(this.state.currentIndex != 0){
    this.setState({
      currentIndex:this.state.currentIndex - 1
    })
  }
}

clickedThumb = (index) =>{
  this.setState({
    currentIndex:index
  })
}
  render() {
    const { match, location, history } = this.props;
    return (
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="arrows left-arrow" onClick ={this.prevBtn}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="arrows right-arrow" onClick ={this.nextBtn}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                    <div className="image-1" style={{"backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`}}></div>
                  </div>
                </div>
                <div className="thumbnails">
                  {this.allImgsloop()}
                </div>
              </div>
            );
          }
        }
