// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createExerciseAction, deleteExerciseAction, updateExerciseAction, getExerciseTableAction} from '../../store/actions';
import Exercise from '../../components/exercise';

const mapStateToProps = state => ({
   table: state.exercise.table,
   status: state.exercise.status,
 });

 const mapDispatchToProps = (dispatch) => ({
   getTable: _.once(() => dispatch(getExerciseTableAction())),
   createExercise: payload => dispatch(createExerciseAction(payload)),
   deleteExercise: payload => dispatch(deleteExerciseAction(payload)),
   updateExercise: payload => dispatch(updateExerciseAction(payload)),
 });

const ExerciseActions = ({
  table, status,
  createExercise, deleteExercise, updateExercise, getTable,
  deletedExercise, updatedExercise,
}) => {
  getTable();
  return (
    <div className="container">
      <Exercise
        table={table}
        createExercise={createExercise}
        deleteExercise={deleteExercise} deletedExercise={deletedExercise}
        updateExercise={updateExercise} updatedExercise={updatedExercise}
        getTable={getTable}
        status={status}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseActions);
