import React, {Component} from 'react';
import InputPicture from '../inputFile/image';
import InputText from '../inputFile/text';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');

export default class DietPart extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className ={`col-sm-12 col-md-6 ${styles.diet}`}>
        {this.props.user?
          this.props.user.role ?
            <h2>Change diet part</h2>
          : null
        : null}
        <center>
          <h3 className={`${styles.title}`}>Diet</h3>
          <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/home/diet.` + 'jpg' || 'png'} className={`${styles.exerciseImg}`} alt="..." />
            {this.props.user?
              this.props.user.role ?
                <InputPicture name='diet' route='home'/>
              : null
            : null}
        </center>
        <br/>
        <p>
          {`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/texts/diet.txt`}
        </p>
        {this.props.user?
          this.props.user.role ?
            <InputText name='diet' route='home' />
          : null
        : null}
      </div>
    );
  }
}
