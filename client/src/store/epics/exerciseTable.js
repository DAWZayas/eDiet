import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';


export const createExerciseTable = action$ => action$
  .ofType(ActionTypes.CREATE_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/exercise/add', payload, headers)
    .map(res => res.response)
    .mergeMap(exerciseTable => Observable.of ({
      type: ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS,
      payload: exerciseTable,
    },
      Actions.addNotificationAction({
        text: 'Se ha creado la tabla de ejercicios', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_EXERCISE_TABLE_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const deleteExerciseTable = action$ => action$
  .ofType(ActionTypes.DELETE_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/exercise/delete/${payload.name}`, payload, headers)
    .map(res => res.response)
    .mergeMap(exerciseTable => Observable.of ({
      type: ActionTypes.DELETE_EXERCISE_TABLE_SUCCESS,
      payload: exerciseTable,
    },
      Actions.addNotificationAction({
        text: 'Se ha borrado la tabla de ejercicios', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.DELETE_EXERCISE_TABLE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const updateExerciseTable = action$ => action$
  .ofType(ActionTypes.UPDATE_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://localhost:8080/api/exercise/update/${payload.name}`,payload, headers)
  .map(res => res.response)
  .mergeMap( exerciseTable  => Observable.of (
    {
      type: ActionTypes.UPDATE_EXERCISE_TABLE_SUCCESS,
      payload: exerciseTable,
    },
    Actions.addNotificationAction({
      text: 'Tabla actualizada', alertType: 'info'
    })
  ))
  .catch(error => Observable.of(
    {
      type: ActionTypes.UPDATE_EXERCISE_TABLE_ERROR,
      payload: error,
    },
    Actions.addNotificationAction({
      text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
    })
  )));

export const getExerciseTable = action$ => action$
  .ofType(ActionTypes.GET_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get('http://localhost:8080/api/exercise', payload, headers)
    .map(res => res.response)
    .mergeMap(exerciseTable  => Observable.of ({
      type: ActionTypes.GET_EXERCISE_TABLE_SUCCESS,
      payload: exerciseTable,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_EXERCISE_TABLE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));
