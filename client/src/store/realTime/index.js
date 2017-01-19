import {Observable} from 'rxjs/Observable';

import {connPromise, r} from '../../util';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';

export const registerMenuObservable = name =>
  Observable.fromPromise(connPromise)
  .concatMap(conn => Observable.fromPromise(r.table('Menu').changes().run(conn)))
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
    Actions.addNotificationAction({text: error.toString(), alertType: 'danger'}),
  ));
