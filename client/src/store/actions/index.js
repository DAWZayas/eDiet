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
});

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

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

//administration menu
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
//administration timeFoods
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

export const getTimeFoodAction = (payload) =>({
  type: ActionTypes.GET_TIMEFOOD,
  payload,
});

export const getTimeFoodsAction =() => ({
  type: ActionTypes.GET_TIMEFOODS,
});
//administration Food
export const getFoodsAction = () => ({
  type: ActionTypes.GET_FOODS,
});

export const getFoodAction = (payload) => ({
  type: ActionTypes.GET_FOOD,
  payload,
});

export const createFoodAction = (payload) => ({
  type: ActionTypes.CREATE_FOOD,
  payload, });


export const deleteFoodAction = (payload) => ({
  type: ActionTypes.DELETE_FOOD,
  payload,
});

export const updateFoodAction = (payload) => ({
  type: ActionTypes.UPDATE_FOOD,
  payload,
});

// exercise ActionTypes
export const createExerciseTableAction = (payload) => ({
  type: ActionTypes.CREATE_EXERCISE_TABLE,
  payload,
});

export const deleteExerciseTableAction = payload => ({
  type: ActionTypes.DELETE_EXERCISE_TABLE,
  payload,
});

export const updateExerciseTableAction = payload => ({
  type: ActionTypes.UPDATE_EXERCISE_TABLE,
  payload,
});

export const getExerciseTableAction = payload => ({
  type: ActionTypes.GET_EXERCISE_TABLE,
  payload,
});

// Exercise actions
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
