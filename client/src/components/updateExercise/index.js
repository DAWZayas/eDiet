import React, {Component} from 'react';
import UpdateExercise from './update';

export default class Update extends Component {
  render() {
    return (
      <div>
        <UpdateExercise
          exercises={this.props.exercises}
          updateExercise={this.props.updateExercise}
          route={this.props.route}
        />
      </div>
    );
  }
};
