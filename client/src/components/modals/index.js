import Modal from 'react-modal';
import React from 'react';

import InputMenu from './menu';
import {Spinner} from '../spinner';
import {drawMenu} from '../../util';

const styles = require('./style.scss');

export default class Admin extends React.Component {

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className={`container ${styles.dietContainer}`}>
        {this.props.menus.map( (obj, index )=>  <InputMenu menu={obj} key={index} /> )}
      </div>
    );
  }
}
