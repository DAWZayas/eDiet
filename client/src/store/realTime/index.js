import {Observable} from 'rxjs/Observable';

import {connPromise, r} from '../../util';
import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';

export const registerMenuObservable = name =>
  Observable.fromPromise(connPromise)
  .concatMap(conn => Observable.fromPromise(r.table('Menu').without('timeFoods').changes().run(conn)))
  .switchMap(cursor => Observable.create((observer) => {
    cursor.each((err, row) => {
      if (err) throw err;
      observer.next(row);
    })
    return function() {
      cursor.close();
    }
  }))
  .map(row => row.new_val)
  .filter(menu => !!menu)
  .map(menu => ({
    type: ActionTypes.GET_MENU_NAME,
    payload: menu,
  }))
  .catch(error => Observable.of(
    Actions.addNotificationAction({text: error.toString(), alertType: 'danger'})
  ));

export const registerTableObservable = name =>
  Observable.fromPromise(connPromise)
  .concatMap(conn => Observable.fromPromise(r.table('Exercise').without('exercises').changes().run(conn)))
  .switchMap(cursor => Observable.create((observer) => {
    cursor.each((err, row) => {
      if (err) throw err;
      observer.next(row);
    })
    return function() {
      cursor.close();
    }
  }))
  .map(row => Object.assign({}, {new: row.new_val}, {old: row.old_val}))
  .map(table => (
    table.new && !table.old?
      {
        type: ActionTypes.GET_CREATE_TABLE,
        payload: table.new,
      }
    :
      !table.new && table.old ?
        {
          type: ActionTypes.GET_DELETE_TABLE,
          payload: table.old.name,
        }
        :
          {
            type: ActionTypes.GET_UPDATE_TABLE,
            payload: {old: table.old.name, new: table.new}
          }
  ))
  .catch(error => Observable.of(
    Actions.addNotificationAction({text: error.toString(), alertType: 'danger'})
  ));
