import * as ActionTypes from '../actionTypes';

const initialState = {exerciseTable: [], status: 'inited'};

export const exerciseTable = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_EXERCISE_TABLE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.DELETE_EXERCISE_TABLE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      }
    case ActionTypes.DELETE_EXERCISE_TABLE_SUCCESS:
      const remove = state.exerciseTable.filter(obj => obj.id === action.payload.id);
      const filter = state.exerciseTable.filter(obj => obj.id !== action.payload.id);
      return {
        ...state,
        exerciseTable: filter,
        delete: remove,
      };

    default:
      return state;
  }
};
