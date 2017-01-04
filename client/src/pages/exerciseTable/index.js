// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createExerciseTableAction, deleteExerciseTableAction, updateExerciseTableAction, getExerciseTableAction} from '../../store/actions';
import ExerciseTable from '../../components/exerciseTable';

const mapStateToProps = (state) => ({
   exerciseTable: state.exerciseTable.exerciseTable,
 });

 const mapDispatchToProps = (dispatch) => ({
   getExerciseTable: _.once(() => dispatch(getExerciseTableAction())),
   createExerciseTable: payload => dispatch(createExerciseTableAction(payload)),
   deleteExerciseTable: payload => dispatch(deleteExerciseTableAction(payload)),
   updateExerciseTable: payload => dispatch(updateExerciseTableAction(payload)),
 });

const ExerciseTableActions = ({exerciseTable, createExerciseTable, deleteExerciseTable, updateExerciseTable, getExerciseTable}) => {
  getExerciseTable();
  return (
    <div className="container">
      <ExerciseTable
        exerciseTable={exerciseTable}
        createExerciseTable={createExerciseTable}
        deleteExerciseTable={deleteExerciseTable}
        updateExerciseTable={updateExerciseTable}
        getExerciseTable={getExerciseTable}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTableActions);
