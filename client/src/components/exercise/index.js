import React, {Component} from 'react';

import Create from './create';
import Delete from './delete';
import Update from './update';

export default class Exercise extends Component {
  render() {
    return (
      <div>
        <Create createExercise={this.props.createExercise} />
        <Delete deleteExercise={this.props.deleteExercise} />
        <Update updateExercise={this.props.updateExercise} />
      </div>
    );
  }
};
