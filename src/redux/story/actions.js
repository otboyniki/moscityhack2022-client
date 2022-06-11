import * as types from './types';

export const setStory = (data) => ({
  type: types.SET_STORY,
  payload: data,
});

export const setValidation = (data) => ({
  type: types.SET_VALIDATION,
  payload: data,
});

export const clearValidation = () => ({
  type: types.CLEAR_VALIDATION,
});

export const addStory = (data) => ({
  type: types.ADD_STORY,
  payload: data,
});

export const addStoryRequest = () => ({
  type: types.ADD_STORY_REQUEST,
});

export const addStorySuccess = () => ({
  type: types.ADD_STORY_SUCCESS,
});

export const addStoryFail = () => ({
  type: types.ADD_STORY_FAIL,
});

export const clearStory = () => ({
  type: types.CLEAR_STORY,
});
