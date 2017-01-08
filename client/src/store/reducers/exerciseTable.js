import * as ActionTypes from '../actionTypes';

const initialState = {exerciseTable: [], status: 'inited'};

export const exerciseTable = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_EXERCISE_TABLE:
      return {
        ...state,
        status: 'loadingGet',
      };
    case ActionTypes.CREATE_EXERCISE_TABLE_ERROR:
    case ActionTypes.DELETE_EXERCISE_TABLE_ERROR:
    case ActionTypes.UPDATE_EXERCISE_TABLE_ERROR:
    case ActionTypes.GET_EXERCISE_TABLE_ERROR:
    case ActionTypes.GET_EXERCISE_TABLE_NAME_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS:
      return {
        ...state,
      };

    case ActionTypes.DELETE_EXERCISE_TABLE_SUCCESS:
      const deleted = state.exerciseTable.filter(obj => obj.name === action.payload.name);
      const filter = state.exerciseTable.filter(obj => obj.name !== action.payload.name);
      return {
        ...state,
        exerciseTable: filter,
        deleted: deleted,
      };

    case ActionTypes.UPDATE_EXERCISE_TABLE_SUCCESS:
      const table = state.exerciseTable.map(obj => obj.id === action.payload.id ? obj = action.payload : obj);
      return {
        ...state,
        exerciseTable: table,
        updated: action.payload,
      };

    case ActionTypes.GET_EXERCISE_TABLE_SUCCESS:
      return {
        ...state,
        exerciseTable: action.payload,
        status: 'done',
      };

    case ActionTypes.GET_EXERCISE_TABLE_NAME_SUCCESS:
        const add = state.exerciseTable.concat(action.payload.exerciseTable);
        return {
          ...state,
          exerciseTable: add,
          status:'done',
        };

    default:
      return state;
  }
};
