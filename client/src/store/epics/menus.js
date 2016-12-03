import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';

export const login = action$ => action$
  .ofType(ActionTypes.DO_ADD_MENU)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/add', payload)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.ADD_MENU_SUCCESS,
      payload: response,
    }))
    .catch(err => Observable.of({
      type: ActionTypes.ADD_MENU_ERROR,
      payload: {
        error: err,
      },
    }))
  );
