import React, {Component} from 'react';

import AddExercise from './add';

export default class Add extends Component {
  render() {
    return (
      <div>
        <AddExercise
          route={this.props.route}
          exercises={this.props.exercises}
          createExercise={this.props.createExercise}
          table={this.props.table}
        />
      </div>
    );
  }
};
