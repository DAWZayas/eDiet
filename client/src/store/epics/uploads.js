import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const uploadPicture = action$ => action$
  .ofType(ActionTypes.UPLOAD_PICTURE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/upload/picture`, payload, headers)
    .map(res => res.response)
    .mergeMap(images  => Observable.of ({
      type: ActionTypes.UPLOAD_PICTURE_SUCCESS,
      payload: images,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.UPLOAD_PICTURE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));
