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
      return {...state};
      case ActionTypes.DELETE_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.DELETE_TIMEFOOD_SUCCESS:
      return {...state};
      case ActionTypes.UPDATE_TIMEFOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
        };
      case ActionTypes.UPDATE_TIMEFOOD_SUCCESS:
      return {...state};
      default:
      return {...state};
    }
}
