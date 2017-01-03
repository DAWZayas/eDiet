import * as ActionTypes from '../actionTypes';

export const createExerciseAction = payload => ({
  type: ActionTypes.CREATE_EXERCISE,
  payload,
});

export const deleteExerciseAction = payload => ({
  type: ActionTypes.DELETE_EXERCISE,
  payload,
});

export const updateExerciseAction = payload => ({
  type: ActionTypes.UPDATE_EXERCISE,
  payload,
});

export const getExerciseAction = payload => ({
  type: ActionTypes.GET_EXERCISE,
  payload,
});
