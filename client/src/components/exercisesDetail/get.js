import React, {Component} from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router';

const styles = require('./style.scss');
const style = {
  heading: {
    backgroundColor: 'rgba(232, 142, 58, 0.329412)',
    width: '100%'
  },
  panel: {
    margin: '3% 2% 0 0',
    padding: '0',
  }
};

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
      <div className={`container ${styles.main}`}>
        <div>
          <h1>
            <center>
              Table: {route}
            </center>
          </h1>
        </div>
        <div className={`container ${styles.panels}`}>
          {exercises.length !== 0 ?
            exercises.map((obj, index) =>
              <div className="panel panel-default col-xs-12 col-md-5 col-lg-3" key={index} style={style.panel}>
                <div className="panel-heading" style={style.heading}>
                  <i className="glyphicon glyphicon-play-circle" />
                  &nbsp;&nbsp;&nbsp; {obj.name}
                </div>
                <div className="panel-body">
                  <ul className={`list-group ${styles.caracteristics}`}>
                    <li className="list-group-item">
                      <i className="glyphicon glyphicon-fire" />
                      &nbsp; Calories: {obj.calories}
                    </li>
                    <li className="list-group-item">
                      <i className="glyphicon glyphicon-tags" />
                      &nbsp; Type: {obj.type}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      &nbsp; Time: {obj.time}
                    </li>
                    <li className="list-group-item">
                      <i className="glyphicon glyphicon-option-horizontal" />
                      &nbsp; Series: {obj.series}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-refresh" aria-hidden="true" />
                      &nbsp; Repeats: {obj.repeats}
                    </li>
                  </ul>
                </div>
              </div>
            )
          :
            <p>
              Without exercises
              </p>
          }
        </div>
      </div>
    )
  }
}
