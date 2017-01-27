import * as ActionTypes from '../actionTypes/';

const initialState = {exercises: [], status: 'inited'};

export const exercises = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_EXERCISES:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_EXERCISES_ERROR:
    case ActionTypes.CREATE_EXERCISE_ERROR:
    case ActionTypes.DELETE_TABLE_ERROR:
    case ActionTypes.UPDATE_EXERCISE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.GET_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        status: 'done',
      };

    case ActionTypes.CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
      };

    case ActionTypes.DELETE_EXERCISE_SUCCESS:
      const exercise = state.exercises.filter(obj => obj.name !== action.payload.name);
      const deleted = state.exercises.filter(obj => obj.name === action.payload.name);
      return {
        ...state,
        exercises: exercise,
        deleted: deleted,
      };

      case ActionTypes.UPDATE_EXERCISE_SUCCESS:
        const exercises = state.exercises.map(obj => obj.name === action.payload.name ? obj = action.payload : obj);
        return {
          ...state,
          exercises: exercises,
          updated: action.payload,
        };

    default:
      return state;
  }
};
