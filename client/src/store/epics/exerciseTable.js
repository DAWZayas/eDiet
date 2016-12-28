import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest} from '../../util';


export const createExerciseTable = action$ => action$
  .ofType(ActionTypes.CREATE_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/exercise/add', payload, headers)
    .map(res => res.response)
    .mergeMap(exerciseTable => Observable.of (
      {
        type: ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS,
        payload: exerciseTable,
      },
      Actions.addNotificationAction({
        text: 'Se ha creado la tabla de ejercicios', alertType: 'info'
      })
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_EXERCISE_TABLE_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction({
        text: 'No se ha podido crear la tabla de ejercicios', alertType: 'danger'
      })
    )));

  export const deleteExerciseTable = action$ => action$
    .ofType(ActionTypes.DELETE_EXERCISE_TABLE)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.post(`http://localhost:8080/api/exercise/delete/${payload.id}`, payload, headers)
      .map(res => res.response)
      .mergeMap(exerciseTable => Observable.of ({
        type: ActionTypes.DELETE_EXERCISE_TABLE_SUCCESS,
        payload,
      },
        Actions.addNotificationAction({
          text: 'Se ha borrado la tabla de ejercicios', alertType: 'info'
        })
      ))
      .catch(error => Observable.of({
        type: ActionTypes.DELETE_EXERCISE_TABLE_ERROR,
        payload: {error},
      },
        Actions.addNotificationAction({
          text: 'No se ha podido borrar la tabla de ejercicios', alertType: 'danger'
        })
      )));