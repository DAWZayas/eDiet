import * as ActionTypes from '../actionTypes/';

const initialState = {images: [], status: 'inited', text: {}};

export const uploads = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPLOAD_PICTURE_ERROR:
    case ActionTypes.UPLOAD_TEXT_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };

    case ActionTypes.UPLOAD_PICTURE_SUCCESS:
    case ActionTypes.UPLOAD_TEXT_SUCCESS:
      return {...state}

    default:
      return state;
  }
};
