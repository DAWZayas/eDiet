
import * as ActionTypes from '../actionTypes';

const initialState = {dropdown:''};

export const dropdowns = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DO_HAMBURGER:
      return {
        ...state,
        dropdown: 'a',
      };
    case ActionTypes.DO_DROPDOWN_LOGIN_LARGE:
      return {
        ...state,
        dropdown: 'b',
      };
    case ActionTypes.DO_DROPDOWN_LOGIN_XS:
      return {
        ...state,
        dropdown: 'c',
      };
    default:
      return state;
  }
};
