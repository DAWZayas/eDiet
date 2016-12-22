// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createExerciseTableAction, deleteExerciseTableAction} from '../../store/actions';
import ExerciseTable from '../../components/exerciseTable';

const mapStateToProps = (state) => ({
   exerciseTable: state.exerciseTable.exerciseTable,
   exerciseTableDelete: state.exerciseTable.delete,
   exerciseTableCreate: state.exerciseTable.create,
 });

 const mapDispatchToProps = (dispatch) => ({
   createExerciseTable: payload => dispatch(createExerciseTableAction(payload)),
   deleteExerciseTable: payload => dispatch(deleteExerciseTableAction(payload)),
 });

const ExerciseTableActions = ({exerciseTable, createExerciseTable, exerciseTableCreate, deleteExerciseTable, exerciseTableDelete}) => {
  return (
    <ExerciseTable
      exerciseTable={exerciseTable}
      createExerciseTable={createExerciseTable} exerciseTableCreate={exerciseTableCreate}
      deleteExerciseTable={deleteExerciseTable} exerciseTableDelete={exerciseTableDelete}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTableActions);
