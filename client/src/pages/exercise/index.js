// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createExerciseAction, deleteExerciseAction, updateExerciseAction, getExercisesAction} from '../../store/actions';
import Exercise from '../../components/exercise';

const mapStateToProps = state => ({
   exercises: state.exercise.exercises,
   status: state.exercise.status,
 });

 const mapDispatchToProps = (dispatch) => ({
   getExercises: _.once(() => dispatch(getExercisesAction())),
   createExercise: payload => dispatch(createExerciseAction(payload)),
   deleteExercise: payload => dispatch(deleteExerciseAction(payload)),
   updateExercise: payload => dispatch(updateExerciseAction(payload)),
 });

const ExerciseActions = ({
  exercises, status,
  createExercise, deleteExercise, updateExercise, getExercises,
  deletedExercise, updatedExercise,
}) => {
  getExercises();
  return (
    <div className="container">
      <Exercise
        exercises={exercises}
        createExercise={createExercise}
        deleteExercise={deleteExercise} deletedExercise={deletedExercise}
        updateExercise={updateExercise} updatedExercise={updatedExercise}
        getExercises={getExercises}
        status={status}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseActions);
