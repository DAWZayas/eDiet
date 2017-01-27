import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes/';
import * as Actions from '../actions';
import {loginErrorToMessage, registerErrorToMessage} from '../../util';

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/login', payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Login success', alertType: 'info'}),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.LOGIN_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction({text: loginErrorToMessage(error), alertType: 'danger'}),
    )),
  );

// Similar to login
export const register = action$ => action$
  .ofType(ActionTypes.DO_REGISTER)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/register', payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Register success', alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.REGISTER_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction({text: registerErrorToMessage(error), alertType: 'danger'}),
    )),
  );

  export const registerAdmin = action$ => action$
    .ofType(ActionTypes.DO_REGISTER_ADMIN)
    .switchMap(({payload}) => Observable
      .ajax.post('http://localhost:8080/api/register', payload)
      .map(res => res.response)
      .mergeMap(response => Observable.of(
        {
          type: ActionTypes.REGISTER_ADMIN_SUCCESS,
          payload: response,
        },
        Actions.addNotificationAction(
          {text: 'Register adminstrator success', alertType: 'info'},
        ),
      ))
      .catch(error => Observable.of(
        {
          type: ActionTypes.REGISTER_AMIN_ERROR,
          payload: {
            error,
          },
        },
        Actions.addNotificationAction({text: registerErrorToMessage(error), alertType: 'danger'}),
      )),
    );

    export const googleLogin = action$ => action$
       .ofType(ActionTypes.DO_GOOGLE_LOGIN)
       .switchMap(({payload}) => {
         if (payload.error) {
           return Observable.of({
             type: ActionTypes.LOGIN_ERROR,
             payload: {
               error: payload.error,
             },
            },
             Actions.addNotificationAction(
               {text: `Google Login error: ${payload.error}`, alertType: 'danger'}
             )
           );
         } else {
           return Observable.of({
             type: ActionTypes.LOGIN_SUCCESS,
             payload,
           },
             Actions.addNotificationAction(
               {text: 'Google Login success', alertType: 'info'}
             )
           );
         }
       });
