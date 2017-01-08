import React, {Component} from 'react';

import Create from './create';
import Delete from './delete';
import Update from './update';
import Get from './get';

export default class ExerciseTable extends Component {
  render() {
    return (
      <div>
        <Create createExerciseTable={this.props.createExerciseTable} />
        <Delete deleteExerciseTable={this.props.deleteExerciseTable} deletedExerciseTable={this.props.deletedExerciseTable} />
        <Update updateExerciseTable={this.props.updateExerciseTable} updatedExerciseTable={this.props.updatedExerciseTable} />
        <Get exerciseTable={this.props.exerciseTable} status={this.props.status} />
      </div>
    );
  }
};
