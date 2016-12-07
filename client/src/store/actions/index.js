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

export const createMenuAction = (payload) => ({
  type : ActionTypes.CREATE_MENU,
  payload,
});

let nextNotificationId = 0;

export const addNotificationAction = ({text, alertType}) => ({
  type: ActionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    text,
    alertType,
  },
});

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

export const getMenuAction = () =>({
  type: ActionTypes.GET_MENU,
});

export const deleteMenuAction = (payload) => ({
  type : ActionTypes.DELETE_MENU,
  payload,
});

export const updateMenuAction = (payload) => ({
  type : ActionTypes.UPDATE_MENU,
  payload,
});
