import * as ActionTypes from '../actionTypes';

const initialState = {exercise: [], table: [], status: 'inited'};

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TABLE:
      return {
        ...state,
        status: 'loadingGet',
      };

    case ActionTypes.CREATE_EXERCISE_ERROR:
    case ActionTypes.DELETE_EXERCISE_ERROR:
    case ActionTypes.UPDATE_EXERCISE_ERROR:
    case ActionTypes.GET_TABLE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
      };

    case ActionTypes.DELETE_EXERCISE_SUCCESS:
      const deleted = state.exercise.filter(obj => obj.name === action.payload.name);
      const filter = state.exercise.filter(obj => obj.name !== action.payload.name);
      return {
        ...state,
        exercise: filter,
        deleted: deleted,
      };

    case ActionTypes.UPDATE_EXERCISE_SUCCESS:
      const exercises = state.exercise.map(obj => obj.name === action.payload.name ? obj = action.payload : obj);
      return {
        ...state,
        exercise: exercises,
        updated: action.payload,
      };

    case ActionTypes.GET_TABLE_SUCCESS:
      return {
        ...state,
        table: action.payload,
        status: 'done',
      };

    default:
      return state;
  }
};
