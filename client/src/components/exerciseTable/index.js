import React, {Component} from 'react'

import Create from './create';
import DeleteTable from './delete';

export default class ExerciseTable extends Component {
  render() {
    return (
      <div>
          <Create createExerciseTable={this.props.createExerciseTable} exerciseTableCreate={this.props.exerciseTableCreate}/>
          <DeleteTable deleteExerciseTable={this.props.deleteExerciseTable} exerciseTableDelete={this.props.exerciseTableDelete}/>
      </div>
    );
  }
};
