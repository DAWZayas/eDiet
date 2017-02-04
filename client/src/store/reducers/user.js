import * as ActionTypes from '../actionTypes';

const initialState = { user: [], navToLogin: false };

export const user = (state = initialState, action) => {
  switch (action.type) {


    case ActionTypes.UPDATE_PASSWORD_ERROR:
    case ActionTypes.GET_USER_ERROR:
    case ActionTypes.UPDATE_EMAIL_ERROR:
    case ActionTypes.UPDATE_HEIGHT_ERROR:
    case ActionTypes.ADD_WEIGHT_ERROR:
    case ActionTypes.DELETE_USER_ERROR:
      return {...state};
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        navToLogin: true
      };
    case ActionTypes.UPDATE_PASSWORD_SUCCESS:
    case ActionTypes.UPDATE_MENUEXERCISE_SUCCESS:
    case ActionTypes.GET_USER_SUCCESS:
    case ActionTypes.UPDATE_EMAIL_SUCCESS:
    case ActionTypes.UPDATE_HEIGHT_SUCCESS:
      return {user: action.payload};

    case ActionTypes.ADD_WEIGHT_SUCCESS:
      const addWeight = state.user.weight.concat(action.payload.weight);
      return {user: state.user = {...state.user, weight:addWeight}};

    case ActionTypes.ADD_IMC_SUCCESS:
      const addImc = state.user.imc.concat(action.payload.imc);
      return {user: state.user = {...state.user, imc:addImc}};

    default:
      return state;
  }
};
