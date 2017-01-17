import * as ActionTypes from '../actionTypes/';

export const getFoodsAction = (payload) => ({
  type: ActionTypes.GET_FOODS,
  payload,
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
