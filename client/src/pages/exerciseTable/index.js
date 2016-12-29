// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createExerciseTableAction} from '../../store/actions';
import ExerciseTable from '../../components/exerciseTable';

const mapStateToProps = (state) => ({
   // exerciseTable: state.exerciseTable.exerciseTable,
 });

 const mapDispatchToProps = (dispatch) => ({
   createExerciseTable: payload => dispatch(createExerciseTableAction(payload)),
 });

const Create = ({createExerciseTable}) => {
  return (
    <ExerciseTable
      exerciseTable={ExerciseTable}
      createExerciseTable={createExerciseTable}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
