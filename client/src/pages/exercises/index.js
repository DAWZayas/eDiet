// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getExercisesAction, createExerciseAction, deleteExerciseAction, updateExerciseAction} from '../../store/actions';
import Exercises from '../../components/exercises';

const mapStateToProps = (state) => ({
   route: state.routing.locationBeforeTransitions.pathname,
   exercises: state.exercises.exercises,
   status: state.exercises.status,
 });

 const mapDispatchToProps = (dispatch) => ({
   getExercises: _.once(payload => dispatch(getExercisesAction(payload))),
   createExercise: payload => dispatch(createExerciseAction(payload)),
   deleteExercise: payload => dispatch(deleteExerciseAction(payload)),
   updateExercise: payload => dispatch(updateExerciseAction(payload)),
 });

const exerciseActions = ({ route, status, exercises, getExercises, createExercise, deleteExercise, updateExercise }) => {
  const rout = route.split('/');
  const name = rout[rout.length-1];
  getExercises({name});
  return (
    <div className="container">
      <Exercises
        route={name}
        exercises={exercises}
        getExercises={getExercises}
        status={status}
        createExercise={createExercise}
        deleteExercise={deleteExercise}
        updateExercise={updateExercise}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(exerciseActions);
