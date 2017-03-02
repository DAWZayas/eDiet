import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {server as serverConfig} from '../../../config';
import Input from '../inputFile/image';
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
    let cont = 1;

    return (
      <div className="container">
        <h1 className={`${styles.title}`}>Change the images of the slider</h1>
        <div className={`container ${styles.pictures}`}>
          {status === 'done' ?
            images.map((image,index) =>
              <div key={index} className={`col-xs-12 col-sm-6 col-md-3 ${styles.picture}`}>
                <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/${image}`} />
                <Input route='slider' name={cont++} />
              </div>
            )
          : null}
        </div>
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AutoPlay);
