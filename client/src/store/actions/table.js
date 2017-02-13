import * as ActionTypes from '../actionTypes/';

export const getTablesAction = payload => ({
  type: ActionTypes.GET_TABLES,
  payload,
});

export const getCreateTableAction = payload => ({
  type: ActionTypes.GET_CREATE_TABLE,
  payload,
});

export const createTableAction = payload => ({
  type: ActionTypes.CREATE_TABLE,
  payload,
});

export const deleteTableAction = payload => ({
  type: ActionTypes.DELETE_TABLE,
  payload,
});

export const updateTableAction = payload => ({
  type: ActionTypes.UPDATE_TABLE,
  payload,
});

export const getDeleteTableAction = payload => ({
  type: ActionTypes.GET_DELETE_TABLE,
  payload,
});

export const getUpdateTableAction = payload => ({
  type: ActionTypes.GET_UPDATE_TABLE,
  payload,
});
