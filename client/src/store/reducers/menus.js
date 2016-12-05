import * as ActionTypes from '../actionTypes';

const initialState = {menu: {}, status: 'inited'};

export const menus = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.CREATE_MENU_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.CREATE_MENU_SUCCESS:
      return {...state,   menu:  action.payload};
      default:
        return state;
    }
  }
