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
    .ajax.get(`http://${host}:${port}/api/exercises/${payload.level}`, payload, headers)
    .map(res => res.response)
    .mergeMap(tables  => Observable.of ({
      type: ActionTypes.GET_PLANNING_EXERCISES_SUCCESS,
      payload: tables,
    }
    ))
    .catch(error => Observable.of({
      type: ActionTypes.GET_PLANNING_EXERCISES_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

    export const updatePlanningExercises = action$ => action$
      .ofType(ActionTypes.UPDATE_PLANNING_EXERCISES)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.get(`http://${host}:${port}/api/exercises/${payload.level}`, payload, headers)
        .map(res => res.response)
        .mergeMap(tables  => Observable.of ({
          type: ActionTypes.UPDATE_PLANNING_EXERCISES_SUCCESS,
          payload: tables,
        },
        Actions.updateMenuExerciseAction(payload = {...payload, tables:JSON.stringify([{hola:'hola'}])} )
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_PLANNING_EXERCISES_UPDATE_ERROR,
          payload: error,
        },
          Actions.addNotificationAction({
            text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
          })
        )));
