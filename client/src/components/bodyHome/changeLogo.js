import React, {Component} from 'react';
import InputPicture from '../inputFile/image';

import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class ChangeLogo extends Component {
  render() {
    return (
      <div className ={`col-sm-12 ${styles.logo}`}>
        <h2>Change company picture</h2>
        <center>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/company/logo.png`}/>
          <InputPicture name='diet' route='home'/>
        </center>
      </div>
    );
  }
}
