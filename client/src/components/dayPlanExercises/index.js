import React, {Component} from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import moment from 'moment';

import {getExercisesAction} from '../../store/actions';

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
      <div className="panel panel-body">

      {exercises.length !== 0 ?
          exercises.map((obj, index) =>
            <ul key={index}>
              <li>
                Name of the exercise: {obj.name}
              </li>
              <li>
                <ul>
                  <li>
                    Series: {obj.series}
                  </li>
                  <li>
                    Repeats: {obj.repeats}
                  </li>
                </ul>
              </li>
            </ul>
          )
      :
        <p>Without exercises</p>
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanExercises);
