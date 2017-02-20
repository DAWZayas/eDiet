import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputFile from '../inputFile/image';
import {server as serverConfig} from '../../../config';

const style = require('./style.scss');

export default class ChangeSlider extends Component{
  render(){
    return (
      <div className={`container ${style.main}`}>
        <h2>Change slider pictures</h2>
        <div className={`container-fluid ${style.pictures}`}>
          <div className={`${style.picture} col-xs-12 col-sm-6 col-md-3`}>
            <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/1.` + 'jpg' || 'png'}/>
            <InputFile route="slider" name="1"/>
          </div>
          <div className={`${style.picture} col-xs-12 col-sm-6 col-md-3`}>
            <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/2.jpg`}/>
            <InputFile route="slider" name="2"/>
          </div>
          <div className={`${style.picture} col-xs-12 col-sm-6 col-md-3`}>
            <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/3.jpg`}/>
            <InputFile route="slider" name="3"/>
          </div>
          <div className={`${style.picture} col-xs-12 col-sm-6 col-md-3`}>
            <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/slider/4.jpg`}/>
            <InputFile route="slider" name="4"/>
          </div>
        </div>
      </div>
    );
  }
}
