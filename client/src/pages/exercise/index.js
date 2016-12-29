// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createExerciseAction, deleteExerciseAction, updateExerciseAction} from '../../store/actions';
import Exercise from '../../components/exercise';

const mapStateToProps = (state) => ({
   exercise: state.exercise.exercise,
 });

 const mapDispatchToProps = (dispatch) => ({
   createExercise: payload => dispatch(createExerciseAction(payload)),
   deleteExercise: payload => dispatch(deleteExerciseAction(payload)),
   updateExercise: payload => dispatch(updateExerciseAction(payload)),
 });

const ExerciseActions = ({exercise, createExercise, deleteExercise, updateExercise}) => {
  return (
    <div className="container">
      <Exercise
        exercise={exercise}
        createExercise={createExercise}
        deleteExercise={deleteExercise}
        updateExercise={updateExercise}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseActions);
