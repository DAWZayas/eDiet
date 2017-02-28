import React, {Component} from 'react';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

let arraybuffer;
const styles = require('./style.scss');

export default class mainText extends Component {
  constructor(){
    super();
  }

  componentWillMount () {
    const reader = new XMLHttpRequest();
    reader.open('GET', `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/main.txt`, true);
    reader.onload = function(e) {
      const arraybuffer = reader.response;
      document.getElementById('text').innerHTML = arraybuffer;
    }
    reader.send();
  }

  render() {
    return (
      <div className = {`col-sm-12 ${styles.mainText}`}>
        {this.props.user?
          this.props.user.role ?
            <h2>Change main text</h2>
          : null
        : null}

        <div id="text"></div>
        
        {this.props.user?
          this.props.user.role ?
            <InputText name='main' route='text' />
          : null
        : null}
      </div>
    );
  }
}
