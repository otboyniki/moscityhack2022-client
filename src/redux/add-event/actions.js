import * as types from './types';

export const setEvent = (data) => ({
  type: types.SET_EVENT,
  payload: data,
});

export const setValidation = (data) => ({
  type: types.SET_VALIDATION,
  payload: data,
});

export const clearValidation = () => ({
  type: types.CLEAR_VALIDATION,
});

export const addSpecialization = () => ({
  type: types.ADD_SPECIALIZATION,
});

export const setSpecialization = (data) => ({
  type: types.SET_SPECIALIZATION,
  payload: data,
});

export const addEvent = (data) => ({
  type: types.ADD_EVENT,
  payload: data,
});

export const addEventRequest = () => ({
  type: types.ADD_EVENT_REQUEST,
});

export const addEventSuccess = (data) => ({
  type: types.ADD_EVENT_SUCCESS,
  payload: data,
});

export const addEventFail = () => ({
  type: types.ADD_EVENT_FAIL,
});

export const clearEvent = () => ({
  type: types.CLEAR_EVENT,
});
