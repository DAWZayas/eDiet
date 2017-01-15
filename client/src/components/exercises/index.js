import React, {Component} from 'react';

import Get from './get';

export default class Exercises extends Component {
  render() {
    return (
      <div>
        <Get
          route={this.props.route}
          exercises={this.props.exercises}
          status={this.props.status}
          createExercise={this.props.createExercise}
          deleteExercise={this.props.deleteExercise}
          updateExercise={this.props.updateExercise}
        />
      </div>
    );
  }
};
