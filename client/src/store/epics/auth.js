import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';
import {loginErrorToMessage, registerErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

 const host = serverConfig.host;
 const port = serverConfig.port;

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/login`, payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'Login success', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.LOGIN_ERROR,
      payload: {
        error,
      }
    },
      Actions.addNotificationAction({
        text: loginErrorToMessage(error), alertType: 'danger'
      })
  )));

export const register = action$ => action$
.ofType(ActionTypes.DO_REGISTER)
.switchMap(({payload}) => Observable
  .ajax.post(`http://${host}:${port}/api/register`, payload)
  .map(res => res.response)
  .mergeMap(response => Observable.of({
    type: ActionTypes.REGISTER_SUCCESS,
    payload: response,
  },
    Actions.addNotificationAction({
      text: 'Register success', alertType: 'info'
    })
  ))
  .catch(error => Observable.of({
    type: ActionTypes.REGISTER_ERROR,
    payload: {
      error,
    }
  },
    Actions.addNotificationAction({
      text: registerErrorToMessage(error), alertType: 'danger'
    })
)));

export const registerAdmin = action$ => action$
.ofType(ActionTypes.DO_REGISTER_ADMIN)
.switchMap(({payload}) => Observable
  .ajax.post(`http://${host}:${port}/api/register`, payload)
  .map(res => res.response)
  .mergeMap(response => Observable.of({
    type: ActionTypes.REGISTER_ADMIN_SUCCESS,
    payload: response,
  },
    Actions.addNotificationAction({
      text: 'Register adminstrator success', alertType: 'info'
    })
  ))
  .catch(error => Observable.of({
    type: ActionTypes.REGISTER_AMIN_ERROR,
    payload: {
      error,
    },
  },
    Actions.addNotificationAction({
      text: registerErrorToMessage(error), alertType: 'danger'
    })
)));

export const googleLogin = action$ => action$
  .ofType(ActionTypes.DO_GOOGLE_LOGIN)
  .mergeMap(({payload}) => {
   if (payload.error) {
     return Observable.of({
       type: ActionTypes.LOGIN_ERROR,
       payload: {
         error: payload.error,
       },
      },
       Actions.addNotificationAction({
         text: `Google Login error: ${payload.error}`, alertType: 'danger'
       })
     );
   } else {
     return Observable.of({
       type: ActionTypes.LOGIN_SUCCESS,
       payload,
     },
      Actions.registerGoogleAction({
        id: payload.user.id, userLogin: payload.user.login
      })
    );
   }
});

export const registerFacebook = action$ => action$
  .ofType(ActionTypes.REGISTER_FACEBOOK)
  .switchMap(({payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/register/facebook`, payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of({
      type: ActionTypes.REGISTER_FACEBOOK_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'Register success', alertType: 'info'
      })
    ))
    .catch(error => Observable.of({
      type: ActionTypes.REGISTER_FACEBOOK_ERROR,
      payload: {
        error,
      },
      })
  ));

export const registerGoogle = action$ => action$
 .ofType(ActionTypes.REGISTER_GOOGLE)
 .switchMap(({payload}) => Observable
   .ajax.post(`http://${host}:${port}/api/register/google`, payload)
   .map(res => res.response)
   .mergeMap(response => Observable.of({
     type: ActionTypes.REGISTER_GOOGLE_SUCCESS,
     payload: response,
   },
     Actions.addNotificationAction({
       text: 'Register success', alertType: 'info'
     })
   ))
   .catch(error => Observable.of({
     type: ActionTypes.REGISTER_GOOGLE_ERROR,
     payload: {
       error,
     },
    }
   )));
