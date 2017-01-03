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
        const filterNameFood = action.payload.foods.filter( ({nameFood}) => action.payload.nameFood === nameFood );
        const createFood = {name: action.payload.name, timeFood: action.payload.timeFood, foods: filterNameFood};
        const foodsCreate = state.foods.map((obj)=> obj.name===action.payload.name && obj.timeFood === action.payload.timeFood ? action.payload : obj);
        return {...state, status: 'done', foods: foodsCreate, createFood};

      case ActionTypes.DELETE_FOOD_SUCCESS:
        const foodsDelete = state.foods.map((obj)=> obj.name===action.payload.name &&
                            obj.timeFood === action.payload.timeFood ? action.payload : obj );
        return {...state, status: 'done', foods: foodsDelete};

      case ActionTypes.UPDATE_FOOD_ERROR:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          foodsUpdate: null,}

      case ActionTypes.UPDATE_FOOD_SUCCESS:
        const foodsUpdate = state.foods.map((obj)=> obj.name===action.payload.foods.name &&
                          obj.timeFood === action.payload.foods.timeFood ? action.payload.foods : obj );
        const filter = action.payload.foods.foods.filter( obj => obj.nameFood === action.payload.food.food );
        return {...state, status: 'done', foods: foodsUpdate, foodsUpdate: filter}

      case ActionTypes.GET_FOOD:
          return {...state, status: 'loading_get'};
      case ActionTypes.GET_FOODS:
          return {...state, status: 'loading_get'};
      case ActionTypes.UPDATE_FOOD:
          return {...state, status: 'loading_update'};
      case ActionTypes.DELETE_FOOD:
          return {...state, status: 'loading_delete'};
      case ActionTypes.GET_FOODS_SUCCESS:
        return {...state, foods: action.payload, status: 'done'};
      default:
        return state;
    }
  }
