
import * as ActionTypes from '../actionTypes';

const initialState = {images: [], status: 'initial'};

export const uploads = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_IMAGES:
      return {
        status: 'loading',
      };

    case ActionTypes.GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        status: 'done',
      };

    default:
      return state;
  }
};
