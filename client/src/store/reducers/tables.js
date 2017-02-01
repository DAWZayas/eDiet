import * as ActionTypes from '../actionTypes/';

const initialState = {tables: [], status: 'inited', hasMore: true, planningExercises: []};

export const tables = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TABLES:
    case ActionTypes.GET_CREATE_TABLE:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_TABLES_ERROR:
    case ActionTypes.CREATE_TABLE_ERROR:
    case ActionTypes.GET_CREATE_TABLE_ERROR:
    case ActionTypes.DELETE_TABLE_ERROR:
    case ActionTypes.UPDATE_TABLE_ERROR:
    case ActionTypes.GET_PLANNING_EXERCISES_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.GET_TABLES_SUCCESS:
      const hasMore = action.payload.length === 10;
      return {
        ...state,
        tables: state.tables.concat(action.payload),
        status: 'done',
        hasMore,
      };

    case ActionTypes.GET_PLANNING_EXERCISES_SUCCESS:
      return {
        ...state,
        planningExercises: action.payload,
      };

    case ActionTypes.CREATE_TABLE_SUCCESS:
      return {
        ...state,
      };

    case ActionTypes.GET_CREATE_TABLE_SUCCESS:
      const add = state.tables.concat(action.payload);
      return {
        ...state,
        tables: add,
        status:'done',
      };

    case ActionTypes.DELETE_TABLE_SUCCESS:
      const filter = state.tables.filter(obj => obj.name !== action.payload.name);
      return {
        ...state,
        tables: filter,
      };

    case ActionTypes.UPDATE_TABLE_SUCCESS:
      const table = state.tables.map(obj => obj.id === action.payload.id ? obj = action.payload : obj);
      return {
        ...state,
        tables: table,
      };

    default:
      return state;
  }
};
