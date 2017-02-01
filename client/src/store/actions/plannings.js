import * as ActionTypes from '../actionTypes/';

export const getPlanningExercisesAction = payload => ({
  type: ActionTypes.GET_PLANNING_EXERCISES,
  payload: payload,
});

export const updatePlanningExercisesAction = payload => ({
  type: ActionTypes.UPDATE_PLANNING_EXERCISES,
  payload: payload,
});
