import * as ActionTypes from '../actionTypes';

const initialState = {menu: [], status: 'inited', hasMore: true};

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
      case ActionTypes.CREATE_MENU_SUCCESS:
        return {...state, status:'done'};
      case ActionTypes.GET_MENU:
        return {...state, status: 'loading'};
      case ActionTypes.GET_MENU_SUCCESS:
        const hasMore = action.payload.menu.length === 10;
        return {...state,   menu: state.menu.concat(action.payload.menu), status: 'done', hasMore};
      case ActionTypes.DELETE_MENU_SUCCESS:
        const del = state.menu.filter(obj => obj.name === action.payload.name);
        const filter = state.menu.filter(obj => obj.name !== action.payload.name);
        return {...state, menu: filter , status:'done'};
      case ActionTypes.UPDATE_MENU_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          update: null,
        };
      case ActionTypes.UPDATE_MENU_SUCCESS:
        const menu = state.menu.map( obj => obj.name === action.payload.name ? Object.assign({}, {name: action.payload.menu.name}) : obj);
        return {...state, status: 'done', menu};
        case ActionTypes.GET_MENU_NAME_REAL:
          console.log(action);
          return {...state, status: 'done' };
      case ActionTypes.GET_MENU_NAME_SUCCESS:
        const addMenu = state.menu.concat(action.payload.menu);
        return {...state, menu: addMenu,  men: action.payload.menu, status:'done'};
      default:
        return state;
    }
  }
