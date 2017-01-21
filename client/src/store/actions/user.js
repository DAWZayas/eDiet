import * as ActionTypes from '../actionTypes/';

export const deleteUserAction = payload => ({
  type: ActionTypes.DELETE_USER,
  payload,
});

export const updateUserAction = payload => ({
  type: ActionTypes.UPDATE_USER,
  payload,
});

export const getUserAction = payload =>({
  type: ActionTypes.GET_USER,
  payload,
});
