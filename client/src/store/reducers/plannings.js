import * as ActionTypes from '../actionTypes/';

const initialState = {tables: [], status: 'inited', hasMore: true};

export const plannings = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLANNING_EXERCISES:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_PLANNING_EXERCISES_ERROR:

      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.GET_PLANNING_EXERCISES_SUCCESS:
      const hasMore = action.payload.length === 10;
      return {
        ...state,
        tables: state.tables.concat(action.payload),
        status: 'done',
        hasMore,
      };

    default:
      return state;
  }
};
