import * as ActionTypes from '../actionTypes';

const initialState = {foods: [], status: 'inited'};

export const foods = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.CREATE_FOOD_ERROR:
      case ActionTypes.GET_FOOD_ERROR:
      case ActionTypes.DELETE_FOOD_ERROR:
      case ActionTypes.GET_FOODS_ERROR:
        return {...state, status: 'error', error: action.payload.error, };

      case ActionTypes.CREATE_FOOD_SUCCESS:
        return {...state};

      case ActionTypes.GET_FOOD_SUCCESS:
        const foodCreate = state.foods.concat( action.payload.menu );
        return {...state, status: 'done', foods: foodCreate};

      case ActionTypes.DELETE_FOOD_SUCCESS:
        const deleteFood = state.foods.filter( (obj) => obj.nameFood !== action.payload)
        return {...state, status: 'done', foods: deleteFood};

      case ActionTypes.UPDATE_FOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          foodsUpdate: null,}

      case ActionTypes.UPDATE_FOOD_SUCCESS:
        const updateFood = state.foods.map( (obj) => obj.nameFood === action.payload.oldFood ? Object.assign({}, {nameFood:action.payload.food}, {calories: action.payload.calories}) : obj);
        return {...state, status: 'done', foods:updateFood}

      case ActionTypes.GET_FOODS_SUCCESS:
        return {...state, foods: action.payload, status: 'done'};
      default:
        return state;
    }
  }
