import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';

export const createTimeFood = action$ => action$
  .ofType(ActionTypes.CREATE_TIMEFOOD)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/menu/${payload.name}/timeFood/add`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.CREATE_TIMEFOOD_SUCCESS,
      payload: response,
    },
    Actions.getTimeFoodAction(payload),
    Actions.addNotificationAction(
      {text: 'Add menu Succes', alertType: 'info'}),
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_TIMEFOOD_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
    )),
  );

  export const deleteTimeFood = action$ => action$
    .ofType(ActionTypes.DELETE_TIMEFOOD)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.post(`http://localhost:8080/api/menu/${payload.name}/timeFood/delete`, payload, headers)
      .delay(2000)
      .map(res => res.response)
      .mergeMap(menu => Observable.of({
        type: ActionTypes.DELETE_TIMEFOOD_SUCCESS,
        payload: payload.timeFood,
      },
      Actions.addNotificationAction(
        {text: 'Delete time Food Succes', alertType: 'info'}),
      ))
      .catch(error => Observable.of({
        type: ActionTypes.DELETE_TIMEFOOD_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
    )),
    );

    export const updateTimeFood = action$ => action$
      .ofType(ActionTypes.UPDATE_TIMEFOOD)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://localhost:8080/api/menu/${payload.name}/timeFood/update`, payload, headers)
        .delay(2000)
        .map(res => res.response)
        .mergeMap( menu  => Observable.of ({
          type: ActionTypes.UPDATE_TIMEFOOD_SUCCESS,
          payload: {timeFoods: menu.timeFoods},
        },
        Actions.addNotificationAction(
          {text: 'Update time Food Succes', alertType: 'info'}),
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_TIMEFOOD_ERROR,
          payload: {error},
        },
        Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
      )),
      );

      export const getTimeFood = action$ => action$
        .ofType(ActionTypes.GET_TIMEFOOD)
        .map(signRequest)
        .switchMap(({headers, payload}) => Observable
          .ajax.get(`http://localhost:8080/api/menu/${payload.name}/${payload.timeFood}`, payload, headers)
          .delay(2000)
          .map(res => res.response)
          .mergeMap( menu  => Observable.of ({
            type: ActionTypes.GET_TIMEFOOD_SUCCESS,
            payload:{menu},
          }))
          .catch(error => Observable.of({
            type: ActionTypes.GET_TIMEFOOD_ERROR,
            payload: {error},
          },
            Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
          )),
        );

        export const getTimeFoods = action$ => action$
          .ofType(ActionTypes.GET_TIMEFOODS)
          .map(signRequest)
          .switchMap(({headers, payload}) => Observable
            .ajax.get(`http://localhost:8080/api/${payload.name}/timeFoods`, payload, headers)
            .delay(2000)
            .map(res => res.response)
            .mergeMap( menu  => Observable.of ({
              type: ActionTypes.GET_TIMEFOODS_SUCCESS,
              payload: {menu},
            }))
            .catch(error => Observable.of({
              type: ActionTypes.GET_TIMEFOODS_ERROR,
              payload: {error},
            },
              Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'}),
            )),
          );
