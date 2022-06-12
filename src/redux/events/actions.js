import * as types from './types';

export const getEvents = (data) => ({
  type: types.GET_EVENTS,
  payload: data,
});

export const getEventsRequest = () => ({
  type: types.GET_EVENTS_REQUEST,
});

export const getEventsSuccess = (data) => ({
  type: types.GET_EVENTS_SUCCESS,
  payload: data,
});

export const getEventsFail = () => ({
  type: types.GET_EVENTS_FAIL,
});

export const clearEvents = () => ({
  type: types.CLEAR_EVENTS,
});
