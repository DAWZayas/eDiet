import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import Image from '../inputFile/image';

const styles = require('./style.scss');

const mapStateToProps = state => ({
  user: state.auth.user
});

class AutoPlay extends Component {
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
      <div>
        <div className={`${styles.slider}`} >
          <Slider {...settings}>
              <img src="../../../images/slider/1.jpg" />
              <img src="../../../images/slider/3.jpg" />
              <img src="../../../images/slider/2.jpg" />
              <img src="../../../images/slider/4.jpg" />
          </Slider>
        </div>
        {this.props.user ?
          this.props.user.role ?
            <Image route={'slider'} />
          : null
        : null}
      </div>
    );
  }
}

export default connect (mapStateToProps, null)(AutoPlay);
