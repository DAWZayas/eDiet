import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util';
import * as Actions from '../actions';

export const createTimeFood = action$ => action$
  .ofType(ActionTypes.CREATE_TIMEFOOD)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/menu/${payload.id}/timeFood/add`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.CREATE_TIMEFOOD_SUCCESS,
      payload: response,
    },
    Actions.getTimeFoodsAction(payload),
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_TIMEFOOD_ERROR,
      payload: {error},
    })),
  );

  export const deleteTimeFood = action$ => action$
    .ofType(ActionTypes.DELETE_TIMEFOOD)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.post(`http://localhost:8080/api/menu/${payload.id}/timeFood/delete`, payload, headers)
      .map(res => res.response)
      .map(menu => ({
        type: ActionTypes.DELETE_TIMEFOOD_SUCCESS,
        payload,
      }
      ))
      .catch(error => Observable.of({
        type: ActionTypes.DELETE_TIMEFOOD_ERROR,
        payload: {error},
      })),
    );

    export const updateTimeFood = action$ => action$
      .ofType(ActionTypes.UPDATE_TIMEFOOD)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://localhost:8080/api/menu/${payload.id}/timeFood/update`, payload, headers)
        .map(res => res.response)
        .mergeMap( menu  => Observable.of ({
          type: ActionTypes.UPDATE_TIMEFOOD_SUCCESS,
            payload: {menu},
          }
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_TIMEFOOD_ERROR,
          payload: {error},
        })),
      );

      export const getTimeFood = action$ => action$
        .ofType(ActionTypes.GET_TIMEFOOD)
        .map(signRequest)
        .switchMap(({headers, payload}) => Observable
          .ajax.get('http://localhost:8080/api/menu', payload, headers)
          .map(res => res.response)
          .mergeMap( menu  => Observable.of ({
            type: ActionTypes.GET_TIMEFOOD_SUCCESS,
            payload: {menu},
          }))
          .catch(error => Observable.of({
            type: ActionTypes.GET_TIMEFOOD_ERROR,
            payload: {error},
          })),
        );

        export const getTimeFoods = action$ => action$
          .ofType(ActionTypes.GET_TIMEFOODS)
          .map(signRequest)
          .switchMap(({headers, payload}) => Observable
            .ajax.get(`http://localhost:8080/api/menu/${payload.id}/timeFood`, payload, headers)
            .map(res => res.response)
            .mergeMap( menu  => Observable.of ({
              type: ActionTypes.GET_TIMEFOODS_SUCCESS,
              payload: {menu, id: payload.id},
            }))
            .catch(error => Observable.of({
              type: ActionTypes.GET_TIMEFOODS_ERROR,
              payload: {error},
            })),
          );
