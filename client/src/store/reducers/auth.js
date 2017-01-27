// our packages
import * as ActionTypes from '../actionTypes/';
import {push} from 'react-router-redux';

const getUser = () => {
  const storedUser = localStorage.getItem('user.data');
  // parse use from stored string
  let user;
  try {
    user = JSON.parse(storedUser);
  } catch (e) {
    console.error('Error parsing user data', e);
  }
  return user;
};

const initialState = {
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data')),
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DO_LOGOUT:
      localStorage.removeItem('user.token');
      localStorage.removeItem('user.data');
      const init = {token: null, user: null},
      initialState = init;
      push('/login');
      return initialState;
    case ActionTypes.REGISTER_SUCCESS:
      return {
        redirectToLogin: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user.token', action.payload.token);
      localStorage.setItem('user.data', JSON.stringify(action.payload.user));
      return {
        ...action.payload,
      };
    case ActionTypes.REGISTER_ADMIN_SUCCESS:
      return {
        ...state
      };
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.REGISTER_ERROR:
      // TODO: probably necessary in the future
      return state;
    default:
      return state;
  }
};
