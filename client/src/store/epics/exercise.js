import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';

export const createExercise = action$ => action$
  .ofType(ActionTypes.CREATE_EXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/exercise/${payload.id}/add`, payload, headers)
    .map(res => res.response)
    .mergeMap(exercise => Observable.of (
      {
        type: ActionTypes.CREATE_EXERCISE_SUCCESS,
        payload: exercise,
      },
      Actions.addNotificationAction({
        text: 'Ejercicio creado', alertType: 'info'
      })
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_EXERCISE_ERROR,
        payload: error,
      },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const deleteExercise = action$ => action$
  .ofType(ActionTypes.DELETE_EXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/exercise/${payload.id}/delete/`, payload, headers)
    .map(res => res.response)
    .mergeMap(exercise => Observable.of ({
      type: ActionTypes.DELETE_EXERCISE_SUCCESS,
      payload: exercise,
    },
      Actions.addNotificationAction({
        text: 'Ejercicio borrado', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.DELETE_EXERCISE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const updateExercise = action$ => action$
  .ofType(ActionTypes.UPDATE_EXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://localhost:8080/api/exercise/${payload.id}/update`,payload, headers)
  .map(res => res.response)
  .mergeMap(exercise  => Observable.of (
    {
      type: ActionTypes.UPDATE_EXERCISE_SUCCESS,
      payload: exercise,
    },
    Actions.addNotificationAction({
      text: 'Ejercicio actualizado', alertType: 'info'
    })
  ))
  .catch(error => Observable.of(
    {
      type: ActionTypes.UPDATE_EXERCISE_ERROR,
      payload: error,
    },
    Actions.addNotificationAction({
      text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
    })
  )));
