import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';

export const createMenu = action$ => action$
  .ofType(ActionTypes.CREATE_MENU)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/menu/add', payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.CREATE_MENU_SUCCESS,
      payload: response,
    },
      Actions.getMenuNameAction(payload),
      Actions.addNotificationAction(
        {text: 'Add menu Succes', alertType: 'info'}),
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_MENU_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )),
  );


  export const getMenu = action$ => action$
    .ofType(ActionTypes.GET_MENU)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.get('http://localhost:8080/api/menu', payload, headers)
      .delay(2000)
      .map(res => res.response)
      .mergeMap( menu  => Observable.of ({
        type: ActionTypes.GET_MENU_SUCCESS,
        payload: {menu},
      }))
      .catch(error => Observable.of({
        type: ActionTypes.GET_MENU_ERROR,
        payload: {error},
      },
        Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
      )),
    );

    export const updateMenu = action$ => action$
      .ofType(ActionTypes.UPDATE_MENU)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://localhost:8080/api/menu/update/${payload.oldname}`,payload, headers)
        .map(res => res.response)
        .mergeMap( menu  => Observable.of ({
          type: ActionTypes.UPDATE_MENU_SUCCESS,
          payload: {menu},
        },
        Actions.addNotificationAction(
          {text: 'Update menu success', alertType: 'info'}),
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_MENU_ERROR,
          payload: {error},
        },
          Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
        )),
      );

    export const deleteMenu = action$ => action$
      .ofType(ActionTypes.DELETE_MENU)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://localhost:8080/api/menu/delete/${payload.name}`, payload, headers)
        .map(res => res.response)
        .mergeMap( menu  => Observable.of ({
          type: ActionTypes.DELETE_MENU_SUCCESS,
          payload,
          },
          Actions.addNotificationAction(
            {text: 'Delete menu success', alertType: 'info'}),
        ))
        .catch(error => Observable.of({
          type: ActionTypes.DELETE_MENU_ERROR,
          payload: {error},
        },
          Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
        )),
      );

      export const getMenuName = action$ => action$
        .ofType(ActionTypes.GET_MENU_NAME)
        .map(signRequest)
        .switchMap(({headers, payload}) => Observable
          .ajax.get(`http://localhost:8080/api/menu/${payload.name}`,payload, headers)
          .map(res => res.response)
          .map(menu => ({
            type: ActionTypes.GET_MENU_NAME_SUCCESS,
            payload: {menu},
          }))
          .catch(error => Observable.of({
            type: ActionTypes.GET_MENU_NAME_ERROR,
            payload: {error},
          }
          )),
        );
