import React, {Component}from 'react';

import Exercise from './exercises';
import Diets from './diets';

export default class bodyHome extends Component {

  render() {
    return (
      <div>
        <Exercise />
        <Diets />
      </div>
    );
  }
}
