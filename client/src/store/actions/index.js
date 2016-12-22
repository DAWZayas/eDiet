import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({
  type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
})

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
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

//menu
export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

export const getMenuAction = () =>({
  type: ActionTypes.GET_MENU,
});

export const getMenuNameAction = (payload) => ({
  type: ActionTypes.GET_MENU_NAME,
  payload,
});

export const deleteMenuAction = (payload) => ({
  type : ActionTypes.DELETE_MENU,
  payload,
});

export const updateMenuAction = (payload) => ({
  type : ActionTypes.UPDATE_MENU,
  payload,
});

export const createMenuAction = (payload) => ({
  type : ActionTypes.CREATE_MENU,
  payload,
});

export const createTimeFoodAction = (payload) => ({
  type : ActionTypes.CREATE_TIMEFOOD,
  payload,
});

export const deleteTimeFoodAction = (payload) => ({
  type : ActionTypes.DELETE_TIMEFOOD,
  payload,
});

export const updateTimeFoodAction = (payload) => ({
  type : ActionTypes.UPDATE_TIMEFOOD,
  payload,
});

export const getTimeFoodAction = () =>({
  type: ActionTypes.GET_TIMEFOOD,
});

export const getTimeFoodsAction =(payload) => ({
  type: ActionTypes.GET_TIMEFOODS,
  payload,
})

// exercise ActionTypes
export const createExerciseTableAction = payload => ({
  type: ActionTypes.CREATE_EXERCISE_TABLE,
  payload,
});

export const deleteExerciseTableAction = payload => ({
  type: ActionTypes.DELETE_EXERCISE_TABLE,
  payload,
});
