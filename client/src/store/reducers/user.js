import * as ActionTypes from '../actionTypes/';

const initialState = { user: []};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {...state};
    case ActionTypes.UPDATE_PASSWORD_ERROR:
      return { ...state};
    case ActionTypes.GET_USER_SUCCESS:
      return {user: action.payload};
    case ActionTypes.GET_USER_ERROR:
      return  {...state };
    case ActionTypes.UPDATE_EMAIL_SUCCESS:
      return {user: action.payload};
    case ActionTypes.UPDATE_EMAIL_ERROR:
      return { ...state};
    case ActionTypes.UPDATE_HEIGHT_SUCCESS:
      return {user: action.payload};
    case ActionTypes.UPDATE_HEIGHT_ERROR:
        return { ...state};
    case ActionTypes.ADD_WEIGHT_SUCCESS:
      const addWeight = state.user.weight.concat(action.payload.weight);
      return {user: state.user.weight = state.user = {...state.user, weight:addWeight}};
    case ActionTypes.ADD_WEIGHT_ERROR:
      return {...state};
    case ActionTypes.ADD_IMC_SUCCESS:
      const addImc = state.user.imc.concat(action.payload.imc);
      return {user: state.user = {...state.user, imc:addImc}};
    case ActionTypes.UPDATE_MENUEXERCISE_SUCCESS:
      console.log(action)
      return {...state}
    default:
      return state;
  }
};
