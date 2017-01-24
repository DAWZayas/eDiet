import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import {Link} from 'react-router';
import DeleteModal from '../modals/exerciseDeleteModal';

const styles = require('./style.scss');

export default class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {table: null}
  }

  componentWillMount() {
    const array = this.props.route.split('/');
    const name = array[array.length - 1];
    this.state = {table: name};
  }

  render(){
    return (
      <div className={`panel panel-default ${styles.container}`}>
        <div className={`panel-heading ${styles.header}`}>
            <p>
              Exercises
            </p>
            <button className="btn btn-default">
              <Link to={`/tables/${this.state.table}/addExercise`}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                Exercise
              </Link>
            </button>
          </div>
          {
            this.props.status === 'loading' ?
              <Spinner />
            :
            <div className="panel-body">
              {this.props.exercises.length === 0 ?
                <p>Without exercises</p>
              :
                this.props.exercises.map((obj, index) =>
                  <div key={index} className={`${styles.body}`}>
                    <ul>
                      <li>
                        <div>
                          <DeleteModal deleted={obj} deleteExercise={this.props.deleteExercise} route={this.props.route}/>
                          <button className="btn btn-default">
                            <Link to={`/tables/${this.state.table}/update/${obj.name}`} className={`${styles.updateButton}`}>
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
