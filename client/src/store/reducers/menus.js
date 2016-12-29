import * as ActionTypes from '../actionTypes';

const initialState = {menu: [], status: 'inited'};

export const menus = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.CREATE_MENU_ERROR:
      case ActionTypes.GET_MENU_ERROR:
      case ActionTypes.DELETE_MENU_ERROR:
      case ActionTypes.GET_MENU_NAME_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.GET_MENU:
          return {...state,   status: 'loading'};
      case ActionTypes.CREATE_MENU_SUCCESS:
        return {...state};
      case ActionTypes.GET_MENU_SUCCESS:
        return {...state,   menu: action.payload.menu, status: 'done'};
      case ActionTypes.DELETE_MENU_SUCCESS:
        const del = state.menu.filter(obj => obj.name === action.payload.name);
        const filter = state.menu.filter(obj => obj.name !== action.payload.name);
        return {...state, menu: filter, delete: del};
      case ActionTypes.UPDATE_MENU_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          update: null,
        };
      case ActionTypes.UPDATE_MENU_SUCCESS:
        const menu = state.menu.map( obj => obj.id === action.payload.menu.id ? obj = action.payload.menu : obj);
        return {...state, menu, update: [action.payload.menu]};
      case ActionTypes.GET_MENU_NAME_SUCCESS:
        const addMenu = state.menu.concat(action.payload.menu);
        return {...state, menu: addMenu,  men: action.payload.menu};
      default:
        return state;
    }
  }
