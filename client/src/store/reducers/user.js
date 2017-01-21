import * as ActionTypes from '../actionTypes';

const initialState = {
  user:null,
 };

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        user: action.payload
      };
    case ActionTypes.UPDATE_USER_ERROR:
      return {

      };
    default:
      return state;

    case ActionTypes.GET_USER_SUCCESS:
      return {
        user: action.payload
      };
    case ActionTypes.GET_USER_ERROR:
      return  {...state };
  }
};
