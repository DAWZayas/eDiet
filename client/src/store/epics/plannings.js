import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const getPlanningExercises = action$ => action$
  .ofType(ActionTypes.GET_PLANNING_EXERCISES)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get(`http://${host}:${port}/api/exercise/:level?skip=${payload.skip || 0}&limit=${payload.limit || 10}`, payload, headers)
    .delay(2000)
    .map(res => res.response)
    .mergeMap(tables  => Observable.of ({
      type: ActionTypes.GET_PLANNING_EXERCISES_SUCCESS,
      payload: tables,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_PLANNING_EXERCISES_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));
