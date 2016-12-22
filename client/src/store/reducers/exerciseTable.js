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
    case ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
