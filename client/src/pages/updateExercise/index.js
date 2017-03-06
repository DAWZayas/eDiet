// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {updateExerciseAction} from '../../store/actions';
import UpdateExercise from '../../components/updateExercise';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   table: state.exercises.tables,
   exercises: state.exercises.exercises,
   route: state.routing.locationBeforeTransitions.pathname,
 });

 const mapDispatchToProps = (dispatch) => ({
   updateExercise: payload => dispatch(updateExerciseAction(payload)),
 });

const update = ({ tables, updateExercise, route }) => {
  return (
    <div className="container">
      <h1 className={`${styles.title}`}>Update the exercise</h1>
      <UpdateExercise
        tables={tables}
        updateExercise={updateExercise}
        route={route}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(update);
