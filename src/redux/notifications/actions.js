export const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'notifications/REMOVE_NOTIFICATION';
export const SHOW_NOTIFICATION = 'notifications/SHOW_NOTIFICATION';

export const addNotification = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data,
});

export const removeNotification = (data) => ({
  type: REMOVE_NOTIFICATION,
  payload: data,
});

export const showNotification = (data) => ({
  type: SHOW_NOTIFICATION,
  payload: data,
});
