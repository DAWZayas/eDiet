// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {getPlanningExercisesAction} from '../../store/actions';
import Exercises from '../../components/exercises';

const mapStateToProps = (state) => ({
   route: state.routing.locationBeforeTransitions.pathname,
   exercises: state.exercises.exercises,
   status: state.exercises.status,
 });

 const mapDispatchToProps = (dispatch) => ({
   getExercises: payload => dispatch(getPlanningExercisesAction(payload)),
 });

const exerciseActions = ({ route, exercises, getExercises, status }) => {
  const rout = route.split('/');
  const level = rout[rout.length-1];
  return (
    <div className="container">
      <Exercises
        route={level}
        exercises={exercises}
        getExercises={getExercises}
        status={status}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(exerciseActions);
