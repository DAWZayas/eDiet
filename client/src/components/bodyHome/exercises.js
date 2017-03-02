import React, {Component} from 'react';
import InputPicture from '../inputFile/image';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class ExercisePart extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount () {
    const reader = new XMLHttpRequest();
    reader.open('GET', `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/exercise.txt`, true);
    reader.onload = function(e) {
      const arraybuffer = reader.response;
      document.getElementById('text2').innerHTML = arraybuffer;
    }
    reader.send();
  }

  render() {
    return (
      <div className ={`col-sm-12 col-md-6 ${styles.exercise}`}>
        {this.props.user?
          this.props.user.role ?
            <h1>Change the exercise part</h1>
          : null
        : null}
        <center>
          <h3 className={`${styles.title}`}>Exercise</h3>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/home/exercise.` + 'jpg'} className={`${styles.exerciseImg}`} alt="..." />
          {this.props.user?
            this.props.user.role ?
              <InputPicture name='exercise' route='home'/>
            : null
          : null}
          <div id="text2" className={`${styles.text}`}></div>
        </center>
        <br/>

        {this.props.user?
          this.props.user.role ?
            <InputText name='exercise' route='home' />
          : null
        : null}
      </div>
    );
  }
}
