import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest, errorMenuMessage} from '../../util';
import * as Actions from '../actions';


export const createMenu = action$ => action$
  .ofType(ActionTypes.CREATE_MENU)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/menu/add', payload, headers)
    .map(res => res.response)
    .mergeMap( menu  => Observable.of (
    {
      type: ActionTypes.CREATE_MENU_SUCCESS,
      payload: menu,
    },
    Actions.addNotificationAction(
      {text: 'Menu success', alertType: 'info'}),
    ))
    .catch(error => Observable.of(
     {
      type: ActionTypes.CREATE_MENU_ERROR,
      payload: {error},
     },
    Actions.addNotificationAction({text: errorMenuMessage(error), alertType: 'danger'}),
    )),
  );
