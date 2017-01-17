import * as ActionTypes from '../actionTypes/';

export const getExercisesAction = payload => ({
  type: ActionTypes.GET_EXERCISES,
  payload,
});

export const createExerciseAction = payload => ({
  type: ActionTypes.CREATE_EXERCISE,
  payload,
});

export const getCreateExerciseAction = payload => ({
  type: ActionTypes.GET_CREATE_EXERCISE,
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
