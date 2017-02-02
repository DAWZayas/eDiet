import * as ActionTypes from '../actionTypes/';

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
        const deleteTimeFood = state.timeFoods.filter( (obj) => obj.timeFood !== action.payload);
        return {...state, status: 'done', timeFoods: deleteTimeFood};

      case ActionTypes.UPDATE_TIMEFOOD_ERROR:
        return {...state, status: 'error', error: action.payload.error, updateTimeFood: null};

      case ActionTypes.UPDATE_TIMEFOOD_SUCCESS:
        const updateTimeFood = action.payload.timeFoods.map( (obj) => Object.assign({}, {timeFood: obj.timeFood}));
        return {...state, status:'done', timeFoods: updateTimeFood};

      case ActionTypes.GET_TIMEFOOD_SUCCESS:        
        const newTimeFood = state.timeFoods.concat(action.payload.menu);
        return {...state, status: 'done', timeFoods: newTimeFood};

      case ActionTypes.GET_TIMEFOODS_SUCCESS:
          return {...state, timeFoods: action.payload.menu, status: 'done'}

      default:
        return {...state};
    }
}
