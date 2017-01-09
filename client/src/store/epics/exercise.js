import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';

export const createExercise = action$ => action$
  .ofType(ActionTypes.CREATE_EXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/exercise/${payload.tName}/add`, payload, headers)
    .map(res => res.response)
    .mergeMap(exercise => Observable.of (
      {
        type: ActionTypes.CREATE_EXERCISE_SUCCESS,
        payload,
      },
      Actions.getExerciseNameAction(payload),
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
    .ajax.post(`http://localhost:8080/api/exercise/${payload.tName}/delete/`, payload, headers)
    .map(res => res.response)
    .mergeMap(exercise => Observable.of ({
      type: ActionTypes.DELETE_EXERCISE_SUCCESS,
      payload,
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
  .ajax.post(`http://localhost:8080/api/exercise/${payload.tName}/update`,payload, headers)
  .map(res => res.response)
  .mergeMap(exercise  => Observable.of (
    {
      type: ActionTypes.UPDATE_EXERCISE_SUCCESS,
      payload,
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

export const getExercise = action$ => action$
  .ofType(ActionTypes.GET_EXERCISE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get('http://localhost:8080/api/exercise/exercises/get', payload, headers)
    .delay(2000)
    .map(res => res.response)
    .mergeMap(exercises  => Observable.of ({
      type: ActionTypes.GET_EXERCISE_SUCCESS,
      payload: exercises,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_EXERCISE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const getExerciseName = action$ => action$
  .ofType(ActionTypes.GET_EXERCISE_NAME)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get('http://localhost:8080/api/exercise/exercises/get',payload, headers)
    .delay(2000)
    .map(res => res.response)
    .map(exercises => ({
      type: ActionTypes.GET_EXERCISE_NAME_SUCCESS,
      payload: exercises,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_EXERCISE_NAME_ERROR,
      payload: error,
    }
    )));
