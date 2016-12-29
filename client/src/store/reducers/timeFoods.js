import * as ActionTypes from '../actionTypes';

const initialState = {timeFoods: [], status: 'inited'};

export const timeFoods = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.GET_TIMEFOODS_ERROR:
      case ActionTypes.GET_TIMEFOOD_ERROR:
      case ActionTypes.DELETE_TIMEFOOD_ERROR:
      case ActionTypes.CREATE_TIMEFOOD_ERROR:
        return {...state, status: 'error', error: action.payload.error, };
        
      case ActionTypes.CREATE_TIMEFOOD_SUCCESS:
        return {...state};

      case ActionTypes.DELETE_TIMEFOOD_SUCCESS:
        const timeFoodDelete = state.timeFoods.filter( ({timeFood, name}) => name === action.payload.name &&
                                timeFood === action.payload.timeFood ? false : true );
        return {...state, timeFoods: timeFoodDelete};

      case ActionTypes.UPDATE_TIMEFOOD_ERROR:
        return {...state, status: 'error', error: action.payload.error, updateTimeFood: null};

      case ActionTypes.UPDATE_TIMEFOOD_SUCCESS:
        const timeFood = { name: action.payload.name,  timeFood: action.payload.timeFood}
        const updateTimeFood = state.timeFoods.map( obj  => obj.name === action.payload.name && obj.timeFood === action.payload.oldTimeFood
                                ? timeFood : obj );
        return {...state, timeFoods: updateTimeFood, updateTimeFood: [timeFood]  };

      case ActionTypes.GET_TIMEFOOD_SUCCESS:
        const news = { name: action.payload.name, timeFood: action.payload.timeFood}
        const newTimeFood = state.timeFoods.concat( news );
        return {...state, timeFoods: newTimeFood, timeFoodCreate: [news] };

      case ActionTypes.GET_TIMEFOODS:
            return {...state, status: 'loading'}
      case ActionTypes.GET_TIMEFOODS_SUCCESS:
          return {...state, timeFoods: action.payload.menu, status: 'done'}

      default:
        return {...state};
    }
}
