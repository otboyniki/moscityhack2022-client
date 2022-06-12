import * as types from './types';

export const getEvent = (data) => ({
  type: types.GET_EVENT,
  payload: data,
});

export const getEventRequest = () => ({
  type: types.GET_EVENT_REQUEST,
});

export const getEventSuccess = (data) => ({
  type: types.GET_EVENT_SUCCESS,
  payload: data,
});

export const getEventFail = () => ({
  type: types.GET_EVENT_FAIL,
});

export const joinEvent = (data) => ({
  type: types.JOIN_EVENT,
  payload: data,
});

export const joinEventRequest = () => ({
  type: types.JOIN_EVENT_REQUEST,
});

export const joinEventSuccess = () => ({
  type: types.JOIN_EVENT_SUCCESS,
});

export const joinEventFail = () => ({
  type: types.JOIN_EVENT_FAIL,
});

export const setActiveSpecialization = (data) => ({
  type: types.SET_ACTIVE_SPECIALIZATION,
  payload: data,
});

export const clearEvent = () => ({
  type: types.CLEAR_EVENT,
});
