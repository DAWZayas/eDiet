import React, {Component} from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import moment from 'moment';

import {getExercisesAction} from '../../store/actions';

const styles = require('./style.scss');
const style = {
  heading: {
    background: 'rgb(255, 255, 255)',
    borderBottom: 'none',
    width: '100%',
    fontFamily: '\'Sansita\', sans-serif',
    fontSize: '1.5em',
    textAlign: 'center',
  },
  panel: {
    margin: '3% 2% 0 0',
    padding: '0',
  }
};

const mapDispatchToProps = dispatch => ({
  getExercises: payload => dispatch(getExercisesAction(payload))
});

const mapStateToProps = state => ({
  exercises: state.exercises.exercises
});

class DayPlanExercises extends Component{
  constructor(props){
    super(props);

    this.expandCalendar = this.expandCalendar.bind(this);
  }

  expandCalendar(tables, day, month) {
    let monthExercises = [];

    for (let i = 1, j = 0; moment().daysInMonth(month) >= i; i++, j++){
      if(j === tables.length) j=0;
      monthExercises.push(tables[j]);
    }
    return monthExercises[day - 1].name;
  }

  componentWillMount() {
    const {tables, day, month, getExercises} = this.props;
    const tableName = this.expandCalendar(tables, day, month);
    getExercises({name: tableName});
  }

  render(){
    const {exercises, day, month, doGetTimeFoods} = this.props;

    return (
      <div className={`container ${styles.main}`}>
        <h1>Today's exercises</h1>
        <div className={`container ${styles.panels}`}>
          {exercises.length !== 0 ?
            exercises.map((obj, index) =>
              <div className="panel panel-default col-xs-12 col-md-5 col-lg-3" key={index} style={style.panel}>
                <div className="panel-heading" style={style.heading}>
                 <h1>{obj.name}</h1>
                 <hr className={`${styles.hr}`}/>
                </div>
                <div className="panel-body">
                  <ul className={`list-group ${styles.caracteristics}`}>
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanExercises);
