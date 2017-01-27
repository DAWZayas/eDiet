import * as ActionTypes from '../actionTypes/';

export const deleteUserAction = payload => ({
  type: ActionTypes.DELETE_USER,
  payload,
});

export const updateMailAction = payload => ({
  type: ActionTypes.UPDATE_EMAIL,
  payload,
});

export const getUserAction = payload =>({
  type: ActionTypes.GET_USER,
  payload,
});

export const updatePasswordAction = payload => ({
  type: ActionTypes.UPDATE_PASSWORD,
  payload,
});

export const updateHeightAction = payload => ({
  type: ActionTypes.UPDATE_HEIGHT,
  payload,
});

export const facebookLoginAction = payload => ({
  type: ActionTypes.FACEBOOK_LOGIN,
  payload,
});
