import * as ActionTypes from '../actionTypes';

const initialState = {timeFood: [], status: 'inited'};

export const timeFoods = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.CREATE_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.CREATE_TIMEFOOD_SUCCESS:
        console.log(action);
        return {...state};
      case ActionTypes.DELETE_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.DELETE_TIMEFOOD_SUCCESS:
        const filter = state.timeFood.filter( obj => obj.id === action.payload.id);
        const menu = filter.reduce((a,b) => a.concat(b));
        const time = menu.timeFoods.filter(obj => obj.timeFood === action.payload.timeFood ? false : true);
        menu.timeFoods=time;
        const menus = state.timeFood.map( obj => obj.id === action.payload.id ? menu : obj)
        return {...state, timeFood: menus};
      case ActionTypes.UPDATE_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          update: null,
        };
      case ActionTypes.UPDATE_TIMEFOOD_SUCCESS:
        const timeF = state.timeFood.map( obj => obj.id === action.payload.menu.id ? action.payload.menu : obj);
        return {...state, timeFood: timeF, update:[action.payload.menu]};
      case ActionTypes.GET_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.GET_TIMEFOOD_SUCCESS:
        return {...state, timeFood: action.payload.menu};
        case ActionTypes.GET_TIMEFOODS_ERROR:
          return {
            ...state,
            status: 'error',
            error: action.payload.error,
          };
        case ActionTypes.GET_TIMEFOODS_SUCCESS:
          const timeFil = state.timeFood.filter( obj => obj.id === action.payload.id);
          const menuFil = timeFil.reduce((a,b) => a.concat(b));
          menuFil.timeFoods = action.payload.menu;
          const timeFoo = state.timeFood.map(obj => obj.id === action.payload.id ? menuFil : obj);
          return {...state, timeFood: timeFoo, create: action.payload.menu};
      default:
      return {...state};
    }
}
