import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import {Link} from 'react-router';

export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const rout = this.props.route.split('/');
    const level = rout[rout.length-1];
    this.props.getExercises({level});
    console.log('>>>', level);
  }

  render(){
    return (
      <div className={`panel panel-default ${styles.container}`}>
        <div className={`panel-heading ${styles.header}`}>
            <p>
              Exercises
            </p>
            <button className="btn btn-default">
              <Link to={`/tables/${route}/addExercise`}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                Exercise
              </Link>
            </button>
          </div>
          {
            status === 'loading' ?
              <Spinner />
            :
            <div className="panel-body">
              {exercises.length === 0 ?
                <p>Without exercises</p>
              :
                exercises.map((obj, index) =>
                  <div key={index} className={`${styles.body}`}>
                    <ul>
                      <li>
                        <div>
                          <button className="btn btn-default">
                            <Link to={`/tables/${route}/update/${obj.name}`} className={`${styles.updateButton}`}>
                              <i className="fa fa-pencil" aria-hidden="true"></i>
                            </Link>
                          </button>
                        </div>
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
          }
        </div>
      )
  }
}
