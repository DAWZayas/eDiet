import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import {Link} from 'react-router';
import DeleteModal from '../modals/exerciseDeleteModal';

const styles = require('./style.scss');

export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const rout = this.props.route.split('/');
    const name = rout[rout.length-1];
    this.props.getExercises({name});
  }

  render(){
    const {route, status, exercises, deleteExercise} = this.props;
    return (
      <div className={`panel panel-default ${styles.container}`}>
        <div className={`panel-heading ${styles.header}`} style={{backgroundColor: 'rgb(255, 255, 255)', border: 'none'}}>
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
                          <DeleteModal deleted={obj} deleteExercise={deleteExercise} route={route}/>
                          <button className="btn btn-default">
                            <Link to={`/tables/${route}/update/${obj.name}`} className={`${styles.updateButton}`}>
                              <i className="fa fa-pencil" aria-hidden="true"></i>
                            </Link>
                          </button>
                        </div>
                        {obj.name}
                        <ul>
                          <li>
                            Calories: {obj.calories} kcal
                          </li>
                          <li>
                            Type: {obj.type}
                          </li>
                          <li>
                            Time: {obj.time} min
                          </li>
                          <li>
                            Series: {obj.series}
                          </li>
                          <li>
                            Repeats: {obj.repeats}
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
