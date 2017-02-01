import * as ActionTypes from '../actionTypes/';

export const getMenuAction = (payload) =>({
  type: ActionTypes.GET_MENU,
  payload,
});

export const getMenuLevelAction = (payload) =>({
  type: ActionTypes.GET_MENU_LEVEL,
  payload,
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

export const updateMenuExerciseAction = (payload) => ({
  type : ActionTypes.UPDATE_MENUEXERCISE,
  payload,
});

export const updateMenuLevelAction = (payload) => ({
  type : ActionTypes.UPDATE_MENU_LEVEL,
  payload,
});
