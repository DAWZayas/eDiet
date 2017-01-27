import * as ActionTypes from '../actionTypes/';

const initialState = { user: null};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {...state};
    case ActionTypes.UPDATE_PASSWORD_ERROR:
      return { ...state};
    case ActionTypes.GET_USER_SUCCESS:
      return {user: action.payload};
    case ActionTypes.GET_USER_ERROR:
      return  {...state };
    case ActionTypes.UPDATE_EMAIL_SUCCESS:
      return {user: action.payload};
    case ActionTypes.UPDATE_EMAIL_ERROR:
      return { ...state};
    case ActionTypes.UPDATE_HEIGHT_SUCCESS:
      return {user: action.payload};
    case ActionTypes.UPDATE_HEIGHT_ERROR:
        return { ...state};
    default:
      return state;
  }
};
