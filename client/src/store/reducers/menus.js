import * as ActionTypes from '../actionTypes';

const initialState = {name};

export const addMenu = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DO_ADD_MENU:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
