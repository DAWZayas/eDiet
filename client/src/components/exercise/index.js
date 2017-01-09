import React, {Component} from 'react';

import Create from './create';
import Delete from './delete';
import Update from './update';
import Get from './get';

export default class Exercise extends Component {
  render() {
    return (
      <div>
        <Create createExercise={this.props.createExercise} />
        <Delete deleteExercise={this.props.deleteExercise} deletedExercise={this.props.deletedExercise} />
        <Update updateExercise={this.props.updateExercise} updatedExercise={this.props.updatedExercise} />
        <Get exercises={this.props.exercises} status={this.props.status} />
      </div>
    );
  }
};
