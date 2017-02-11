import React, {Component} from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router';

const styles = require('./style.scss');

export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getExercises({name: this.props.route});
  }

  render(){
    const {route, exercises} = this.props;
    return (
      <div className={`panel panel-default ${styles.container}`}>
        <div className={`panel-heading`}>
            <p>
              Exercises
            </p>
          </div>
          <div className={`panel-body ${styles.body}`}>
            {exercises.length === 0 ?
              <p>Without exercises</p>
            :
              exercises.map((obj, index) =>
                <div key={index}>
                  <ul>
                    <li>
                      <i className="glyphicon glyphicon-play-circle" />
                      &nbsp; {obj.name}
                      <ul>
                        <li>
                          <i className="glyphicon glyphicon-fire" />
                          &nbsp; Calories: {obj.calories}
                        </li>
                        <li>
                          <i className="glyphicon glyphicon-tags" />
                          &nbsp; Type: {obj.type}
                        </li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          &nbsp; Time: {obj.time}
                        </li>
                        <li>
                          <i className="glyphicon glyphicon-option-horizontal" />
                          &nbsp; Series: {obj.series}
                        </li>
                        <li>
                          <i className="fa fa-refresh" aria-hidden="true" />
                          &nbsp; Repeats: {obj.repeats}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </div>
      )
  }
}
