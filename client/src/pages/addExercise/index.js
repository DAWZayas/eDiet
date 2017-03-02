// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createExerciseAction} from '../../store/actions';
import AddExercise from '../../components/addExercise';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
  route: state.routing.locationBeforeTransitions.pathname,
  exercises: state.exercises.exercises,
  table: state.exercises.table,
 });

 const mapDispatchToProps = (dispatch) => ({
   createExercise: payload => dispatch(createExerciseAction(payload)),
 });

const create = ({ route, exercises, createExercise, table}) => {
  return (
    <div className="container" style={{marginBottom: '5%'}}>
      <h1 className={`${styles.title}`}>Create an exercise</h1>
      <AddExercise
        route={route}
        exercises={exercises}
        createExercise={createExercise}
        table={table}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(create);
