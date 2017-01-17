import * as ActionTypes from '../actionTypes/';

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

export const getTimeFoodsAction =(payload) => ({
  type: ActionTypes.GET_TIMEFOODS,
  payload,
});
