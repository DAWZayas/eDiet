// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createExerciseTableAction, deleteExerciseTableAction, updateExerciseTableAction} from '../../store/actions';
import ExerciseTable from '../../components/exerciseTable';

const mapStateToProps = (state) => ({
   exerciseTable: state.exerciseTable.exerciseTable,
 });

 const mapDispatchToProps = (dispatch) => ({
   createExerciseTable: payload => dispatch(createExerciseTableAction(payload)),
   deleteExerciseTable: payload => dispatch(deleteExerciseTableAction(payload)),
   updateExerciseTable: payload => dispatch(updateExerciseTableAction(payload)),
 });

const ExerciseTableActions = ({exerciseTable, createExerciseTable, deleteExerciseTable, updateExerciseTable}) => {
  return (
    <div className="container">
      <ExerciseTable
        exerciseTable={exerciseTable}
        createExerciseTable={createExerciseTable}
        deleteExerciseTable={deleteExerciseTable}
        updateExerciseTable={updateExerciseTable}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTableActions);
