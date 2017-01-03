import * as ActionTypes from '../actionTypes';

export const createExerciseTableAction = (payload) => ({
  type: ActionTypes.CREATE_EXERCISE_TABLE,
  payload,
});

export const deleteExerciseTableAction = payload => ({
  type: ActionTypes.DELETE_EXERCISE_TABLE,
  payload,
});

export const updateExerciseTableAction = payload => ({
  type: ActionTypes.UPDATE_EXERCISE_TABLE,
  payload,
});

export const getExerciseTableAction = payload => ({
  type: ActionTypes.GET_EXERCISE_TABLE,
  payload,
});
