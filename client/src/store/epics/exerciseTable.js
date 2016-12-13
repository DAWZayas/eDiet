import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';


export const createExerciseTable = action$ => action$
  .ofType(ActionTypes.CREATE_EXERCISE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/exercise/add', payload, headers)
    .map(res => res.response)
    .map(menu => ({
      type: ActionTypes.CREATE_EXERCISE_TABLE_SUCCESS,
      payload: exerciseTable,
    },
      ActionTypes.addNotification({text: 'Se ha creado la tabla de ejercicios', alertType: 'info'});
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_EXERCISE_TABLE_ERROR,
      payload: {error},
    },
      ActionTypes.addNotification({text: 'No se ha podido crear la tabla de ejercicios', alertType: 'danger'});
    )),
  );
