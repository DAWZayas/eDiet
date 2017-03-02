// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {getPlanningExercisesAction} from '../../store/actions';
import PlanningExercises from '../../components/planningsExercises';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   route: state.routing.locationBeforeTransitions.pathname,
   tables: state.tables.planningExercises
 });

 const mapDispatchToProps = (dispatch) => ({
   getExercises: payload => dispatch(getPlanningExercisesAction(payload)),
 });

const planningsExercisesActions = ({ route, tables, getExercises }) => {
  const rout = route.split('/');
  const level = rout[rout.length-2];
  return (
    <div className="container">
      <h1 className={`${styles.title}`}>Exercises of this plan</h1>
      <PlanningExercises
        route={level}
        tables={tables}
        getExercises={getExercises}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(planningsExercisesActions);
