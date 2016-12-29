import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img  src="https://images.unsplash.com/photo-1421899528807-04d925f39555?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=" width='97%' height='2%'/></div>
          <div><img src="https://images.unsplash.com/uploads/141150092992295b16435/00a01fcc?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=674&amp;q=80&amp;cs=tinysrgb&amp;crop=&quot" width='100%' heigth='100%' /></div>
          <div><h3>3</h3></div>
        </Slider>
      </div>
    );
  }
}
