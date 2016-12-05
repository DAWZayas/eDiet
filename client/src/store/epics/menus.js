import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util';

export const createMenu = action$ => action$
  .ofType(ActionTypes.CREATE_MENU)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/menu/add', payload, headers)
    .map(res => res.response)
    .map(menu => ({
      type: ActionTypes.CREATE_MENU_SUCCESS,
      payload: menu,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_MENU_ERROR,
      payload: {error},
    })),
  );
