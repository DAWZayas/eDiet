import React, {Component} from 'react';
import InputPicture from '../inputFile/image';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class ExercisePart extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className ={`col-sm-12 col-md-6 ${styles.exercise}`}>
        {this.props.user?
          this.props.user.role ?
            <h2>Change exercise part</h2>
          : null
        : null}
        <center>
          <h3 className={`${styles.title}`}>Exercise</h3>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/home/exercise.` + 'jpg' || 'png'} className={`${styles.exerciseImg}`} alt="..." />
          {this.props.user?
            this.props.user.role ?
              <InputPicture name='exercise' route='home'/>
            : null
          : null}
        </center>
        <br/>
        <p>
          {`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/exercise.txt`}
        </p>
        {this.props.user?
          this.props.user.role ?
            <InputText name='exercise' route='home' />
          : null
        : null}
      </div>
    );
  }
}
