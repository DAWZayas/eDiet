import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const getTables = action$ => action$
  .ofType(ActionTypes.GET_TABLES)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get(`http://${host}:${port}/api/exercise?skip=${payload.skip || 0}&limit=${payload.limit || 10}`, payload, headers)
    .delay(2000)
    .map(res => res.response)
    .mergeMap(tables  => Observable.of ({
      type: ActionTypes.GET_TABLES_SUCCESS,
      payload: tables,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_TABLES_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const createTable = action$ => action$
  .ofType(ActionTypes.CREATE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/exercise/add`, payload, headers)
    .map(res => res.response)
    .mergeMap(table => Observable.of ({
      type: ActionTypes.CREATE_TABLE_SUCCESS,
      payload: table,
    },
      Actions.getCreateTableAction(payload),
      Actions.addNotificationAction({
        text: 'Table created', alertType: 'success'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_TABLE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const getCreateTable = action$ => action$
  .ofType(ActionTypes.GET_CREATE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get(`http://${host}:${port}/api/exercise/${payload.name}`,payload, headers)
    .delay(2000)
    .map(res => res.response)
    .map(table => ({
      type: ActionTypes.GET_CREATE_TABLE_SUCCESS,
      payload: table,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_CREATE_TABLE_ERROR,
      payload: error,
    }
    )));

export const deleteTable = action$ => action$
  .ofType(ActionTypes.DELETE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/exercise/delete/${payload.name}`, payload, headers)
    .map(res => res.response)
    .mergeMap(exercise => Observable.of ({
      type: ActionTypes.DELETE_TABLE_SUCCESS,
      payload,
    },
      Actions.addNotificationAction({
        text: 'Table deleted', alertType: 'success'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.DELETE_TABLE_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
      })
    )));

export const updateTable = action$ => action$
  .ofType(ActionTypes.UPDATE_TABLE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://${host}:${port}/api/exercise/update/${payload.name}`,payload, headers)
  .map(res => res.response)
  .mergeMap(table  => Observable.of (
    {
      type: ActionTypes.UPDATE_TABLE_SUCCESS,
      payload: table,
    },
    Actions.addNotificationAction({
      text: 'Table updated', alertType: 'success'
    })
  ))
  .catch(error => Observable.of(
    {
      type: ActionTypes.UPDATE_TABLE_ERROR,
      payload: error,
    },
    Actions.addNotificationAction({
      text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
    })
  )));
