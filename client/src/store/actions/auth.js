import * as ActionTypes from '../actionTypes';

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});
