import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,      
    };
    const slider = {
      margin:"-1% 0 8% 0",     
      
    }
    return (
      <div className= "hidden-xs hidden-sm" style={slider} >
        <Slider {...settings}>          
          <div><img src="./src/components/slider/images/a.jpg" width='100%' height='800px' /> </div>
          <div><img src="./src/components/slider/images/2.jpg" width='100%' height='800px' /> </div>
          <div><img src="./src/components/slider/images/3.jpg" width='100%' height='800px' /> </div>
          <div><img src="./src/components/slider/images/b.jpg" width='100%' height='800px' /> </div>
        </Slider>
      </div>
    );
  }
}
