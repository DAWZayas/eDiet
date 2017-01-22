import React, {Component}from 'react';

import Exercise from './exercises';
import Diets from './diets';
const styles = require('./style.scss');

export default class bodyHome extends Component {
  render() {
    return (
      <div className={`${styles.container}`}>
        <Exercise />
        <Diets />
      </div>
    );
  }
}
