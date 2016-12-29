import React, {Component} from 'react'

import Create from './create';

export default class ExerciseTable extends Component {
  render() {
    return (
      <div>
          <Create createExerciseTable={this.props.createExerciseTable}/>
      </div>
    );
  }
};
