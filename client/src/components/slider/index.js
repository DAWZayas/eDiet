import React, { Component } from 'react';
import Slider from 'react-slick';

const styles = require('./style.scss');

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      adaptativeHeight:true,
    };

    return (
      <div className={`${styles.slider}`} >
        <Slider {...settings}>
            <img src="../../../images/slider/1.jpg" />
            <img src="../../../images/slider/3.jpg" />
            <img src="../../../images/slider/2.jpg" />
            <img src="../../../images/slider/4.jpg" />
        </Slider>
      </div>
    );
  }
}
