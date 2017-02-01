// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {getExercisesAction} from '../../store/actions';
import ExercisesDetail from '../../components/exercisesDetail';

const mapStateToProps = (state) => ({
   route: state.routing.locationBeforeTransitions.pathname,
   exercises: state.exercises.exercises,
 });

 const mapDispatchToProps = (dispatch) => ({
   getExercises: payload => dispatch(getExercisesAction(payload)),
 });

const exerciseActions = ({ route, exercises, getExercises}) => {
  const rout = route.split('/');
  const name = rout[rout.length-1];
  return (
    <div className="container">
      <ExercisesDetail
        route={name}
        exercises={exercises}
        getExercises={getExercises}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(exerciseActions);
