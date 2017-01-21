import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';

export const updateUser = action$ => action$
  .ofType(ActionTypes.UPDATE_USER)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/user/${payload.id}/update`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.UPDATE_USER_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction(
        {text: 'update user success', alertType: 'info'}),
    ))
    .catch(error => Observable.of({
      type: ActionTypes.UPDATE_USER_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )),
  );

  export const getUser = action$ => action$
    .ofType(ActionTypes.GET_USER)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.get(`http://localhost:8080/api/user/${payload.id}`, payload, headers)
      .delay(2000)
      .map(res => res.response)
      .mergeMap( user  => Observable.of ({
        type: ActionTypes.GET_USER_SUCCESS,
        payload: user,
      }))
      .catch(error => Observable.of({
        type: ActionTypes.GET_USER_ERROR,
        payload: {error},
      },
        Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
      )),
    );
