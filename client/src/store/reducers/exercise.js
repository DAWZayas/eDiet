import * as ActionTypes from '../actionTypes';

const initialState = {exercises: [], status: 'inited'};

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_EXERCISE:
      return {
        ...state,
        status: 'loadingGet',
      };

    case ActionTypes.CREATE_EXERCISE_ERROR:
    case ActionTypes.DELETE_EXERCISE_ERROR:
    case ActionTypes.UPDATE_EXERCISE_ERROR:
    case ActionTypes.GET_EXERCISE_ERROR:
    case ActionTypes.GET_EXERCISE_NAME_ERROR:
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
      const table = state.exercises.filter(obj => obj.name === action.payload.tName).reduce((a, b) => a.concat(b));
      const exercise = table.exercises.filter(obj => obj.name !== action.payload.name);
      const deleted = table.exercises.filter(obj => obj.name === action.payload.name);
      return {
        ...state,
        exercises: exercise,
        deleted: deleted,
      };

    case ActionTypes.UPDATE_EXERCISE_SUCCESS:
    console.log('>>>>PAY', action.payload);
      const tables = state.exercises.filter(obj => obj.name === action.payload.tName).reduce((a, b) => a.concat(b));
      const exercises = state.exercises.map(obj => obj.name === action.payload.name ? obj = action.payload : obj);
      return {
        ...state,
        exercises: exercises,
        updated: action.payload,
      };

    case ActionTypes.GET_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        status: 'done',
      };

    case ActionTypes.GET_EXERCISE_NAME_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        status:'done',
      };

    default:
      return state;
  }
};
