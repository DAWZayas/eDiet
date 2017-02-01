import React, {Component} from 'react';

import Get from './get';

export default class planningsExercises extends Component {
  render() {
    return (
      <div>
        <Get
          route={this.props.route}
          getExercises={this.props.getExercises}
          tables={this.props.tables}
          status={this.props.status}
        />
      </div>
    );
  }
};
