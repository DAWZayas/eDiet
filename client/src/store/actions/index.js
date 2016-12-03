import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({
  type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

export const hamburgerAction = () => ({
  type: ActionTypes.DO_HAMBURGER,
});

export const largeLoginAction = () => ({
  type: ActionTypes.DO_DROPDOWN_LOGIN_LARGE,
});

export const xsLoginAction = () => ({
  type: ActionTypes.DO_DROPDOWN_LOGIN_XS,
});
