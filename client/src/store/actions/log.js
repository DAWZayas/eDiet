import * as ActionTypes from '../actionTypes/';

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

export const registerAdminAction = payload =>({
  type: ActionTypes.DO_REGISTER_ADMIN,
  payload,
});


export const googleLoginAction = payload => ({
   type: ActionTypes.DO_GOOGLE_LOGIN,
   payload,
 });

export const registerFacebookAction = payload =>({
  type: ActionTypes.REGISTER_FACEBOOK,
  payload,
});

export const registerGoogleAction = payload =>({
  type: ActionTypes.REGISTER_GOOGLE,
  payload,
});
