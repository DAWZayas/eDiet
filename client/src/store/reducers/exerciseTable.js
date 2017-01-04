import * as ActionTypes from '../actionTypes';

const initialState = {exerciseTable: [], status: 'inited'};

export const exerciseTable = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_EXERCISE_TABLE:
      return {
        status: 'loadingGet',
      };
    case ActionTypes.CREATE_EXERCISE_TABLE_ERROR:
    case ActionTypes.DELETE_EXERCISE_TABLE_ERROR:
    case ActionTypes.UPDATE_EXERCISE_TABLE_ERROR:
    case ActionTypes.GET_EXERCISE_TABLE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS:
    case ActionTypes.DELETE_EXERCISE_TABLE_SUCCESS:
    case ActionTypes.UPDATE_EXERCISE_TABLE_SUCCESS:
      return {
        ...state,
      };

    case ActionTypes.GET_EXERCISE_TABLE_SUCCESS:

      return {
        ...state,
        exerciseTable: action.payload,
        status: 'done',
      };

    default:
      return state;
  }
};
