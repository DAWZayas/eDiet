import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes/';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const updateMenuExercise = action$ => action$
  .ofType(ActionTypes.UPDATE_MENUEXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/menusExercises/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.UPDATE_MENUEXERCISE_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction(
        {text: 'Follow menu and Exercise Success', alertType: 'info'})
    ))
    .catch(error => Observable.of({
      type: ActionTypes.UPDATE_MENUEXERCISE_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )));
