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
          <div className={`panel-body ${styles.body}`} >
            {exercises.length === 0 ?
              <p>Without exercises</p>
            :
              exercises.map((obj, index) =>
                <div key={index}>
                  <ul>
                    <li>
                      <i className="fa fa-cogs" aria-hidden="true"></i>
                      &nbsp; {obj.name}
                      <ul>
                        <li>
                          <span className="glyphicon glyphicon-fire" />
                          &nbsp; Calories: {obj.calories}
                        </li>
                        <li>
                          <span className="glyphicon glyphicon-tags" />
                          &nbsp; Type: {obj.type}
                        </li>
                        <li>
                          <span className="glyphicon glyphicon-time" />
                          &nbsp; Time: {obj.time}
                        </li>
                        <li>
                          <span className="glyphicon glyphicon-refresh" />
                          &nbsp; Repeats: {obj.repeats}
                        </li>
                        <li>
                          Series: {obj.series}
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
