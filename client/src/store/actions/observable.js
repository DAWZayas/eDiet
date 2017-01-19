import * as ActionTypes from '../actionTypes/';

export const addObservable = observable => ({
  type: ActionTypes.ADD_OBSERVABLE,
  payload: observable,
});

export const removeObservable = observable => ({
  type: ActionTypes.REMOVE_OBSERVABLE,
  payload: observable,
});
