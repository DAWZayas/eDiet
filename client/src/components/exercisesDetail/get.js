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
          <div className="panel-body">
            {exercises.length === 0 ?
              <p>Without exercises</p>
            :
              exercises.map((obj, index) =>
                <div key={index}>
                  <ul>
                    <li>
                      {obj.name}
                      <ul>
                        <li>
                          Calorías: {obj.calories}
                        </li>
                        <li>
                          Tipo: {obj.type}
                        </li>
                        <li>
                          Tiempo: {obj.time}
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
