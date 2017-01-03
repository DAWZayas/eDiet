import * as ActionTypes from '../actionTypes';

let nextNotificationId = 0;

export const addNotificationAction = ({text, alertType}) => ({
  type: ActionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    text,
    alertType,
  },
});

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});
