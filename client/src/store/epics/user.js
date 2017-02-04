import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes/';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const updatePassword = action$ => action$
  .ofType(ActionTypes.UPDATE_PASSWORD)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/${payload.id}/update/password`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.UPDATE_PASSWORD_SUCCESS,
      payload,
    },
      Actions.addNotificationAction({
        text: 'update password success', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.UPDATE_PASSWORD_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
  )));

export const updateEmail = action$ => action$
  .ofType(ActionTypes.UPDATE_EMAIL)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/${payload.id}/update/email`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.UPDATE_EMAIL_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'update email success', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.UPDATE_EMAIL_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )));

export const updateHeight = action$ => action$
  .ofType(ActionTypes.UPDATE_HEIGHT)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/${payload.id}/update/height`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.UPDATE_HEIGHT_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'update height success', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.UPDATE_HEIGHT_ERROR,
      payload: {error},
    },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )));

export const getUser = action$ => action$
  .ofType(ActionTypes.GET_USER)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get(`http://${host}:${port}/api/user/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap( user  => Observable.of ({
      type: ActionTypes.GET_USER_SUCCESS,
      payload: user,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_USER_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: errorBack(error), alertType: 'danger'
    })
  )));

export const facebookLogin = action$ => action$
  .ofType(ActionTypes.FACEBOOK_LOGIN)
  .mergeMap(({payload}) => {
    if (payload.error) {
      return Observable.of(
        {
          type: ActionTypes.LOGIN_ERROR,
          payload: {
            error: payload.error,
          },
        },
        Actions.addNotificationAction({
          text: `Facebook Login error: ${payload.error}`, alertType: 'danger'
        })
      );
    } else {
      return Observable.of(
        {
          type: ActionTypes.LOGIN_SUCCESS,
          payload,
        },
        Actions.registerFacebookAction({
          id: payload.user.id, userLogin: payload.user.login
        })
      );
    }
  });

export const addWeight = action$ => action$
  .ofType(ActionTypes.ADD_WEIGHT)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/${payload.id}/addWeight`, payload, headers)
    .map(res => res.response)
    .mergeMap(response  => Observable.of ({
      type: ActionTypes.ADD_WEIGHT_SUCCESS,
      payload: response,
    },
      Actions.addImcAction({
        payload
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.ADD_WEIGHT_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: errorBack(error), alertType: 'danger'
      })
    )));


export const addImc = action$ => action$
  .ofType(ActionTypes.ADD_IMC)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/user/${payload.payload.id}/addImc`, payload.payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.ADD_IMC_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'Imc and weight has been updated', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.ADD_IMC_ERROR,
      payload: error,
    },
      Actions.addNotificationAction({
        text: errorBack(error), alertType: 'danger'
      })
  )));

  export const deleteUser = action$ => action$
    .ofType(ActionTypes.DELETE_USER)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.post(`http://${host}:${port}/api/user/${payload.id}/delete`, payload, headers)
      .map(res => res.response)
      .mergeMap( response  => Observable.of ({
        type: ActionTypes.DELETE_USER_SUCCESS,
        payload: response,
      },
        Actions.addNotificationAction({
          text: 'Deleted user successfully', alertType: 'success'
        })
      ))
      .catch(error => Observable.of({
        type: ActionTypes.DELETE_USER_ERROR,
        payload: error,
      },
        Actions.addNotificationAction({
          text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
        })
    )));

    export const updateMenuExercise = action$ => action$
      .ofType(ActionTypes.UPDATE_MENUEXERCISE)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://${host}:${port}/api/user/menusExercises/${payload.id}`, payload, headers)
        .map(res => res.response)
        .mergeMap( response  => Observable.of ({
          type: ActionTypes.UPDATE_MENUEXERCISE_SUCCESS,
          payload: response,
        },
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_MENUEXERCISE_ERROR,
          payload: {error},
        },
          Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
        )));
