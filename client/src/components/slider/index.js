import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {server as serverConfig} from '../../../config';
const styles = require('./style.scss');

import {getImagesAction} from '../../store/actions';

const mapStateToProps = state => ({
  user: state.auth.user,
  images: state.uploads.images,
  status: state.uploads.status
});

const mapDispatchToProps = dispatch => ({
  getImages: payload => dispatch(getImagesAction(payload))
});

class AutoPlay extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getImages({folder: 'slider'});
  }

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

    const {images, status} = this.props;

    return (
      <div>
        <div className={`${styles.slider}`} >
          {status === 'done' ?
            <Slider {...settings}>
              {images.map((image,index) =>
                <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/${image}`} key={index} />
              )}
            </Slider>
          : null}
        </div>
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AutoPlay);
