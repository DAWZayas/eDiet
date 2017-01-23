import * as ActionTypes from '../actionTypes/';

export const getMenuAction = (payload) =>({
  type: ActionTypes.GET_MENU,
  payload,
});

export const getMenuNameRealAction = (payload) =>({
  type: ActionTypes.GET_MENU_NAME_REAL,
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