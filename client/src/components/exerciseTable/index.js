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
        <Delete deleteExerciseTable={this.props.deleteExerciseTable} />
        <Update updateExerciseTable={this.props.updateExerciseTable} />
        <Get exerciseTable={exerciseTable}/>
      </div>
    );
  }
};
