import * as ActionTypes from '../actionTypes/';

export const uploadPictureAction = payload => ({
  type: ActionTypes.UPLOAD_PICTURE,
  payload,
});

export const uploadTextAction = payload => ({
  type: ActionTypes.UPLOAD_TEXT,
  payload,
});
