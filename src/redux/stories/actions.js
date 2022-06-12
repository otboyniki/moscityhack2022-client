import * as types from './types';

export const getStories = (data) => ({
  type: types.GET_STORIES,
  payload: data,
});

export const getStoriesRequest = () => ({
  type: types.GET_STORIES_REQUEST,
});

export const getStoriesSuccess = (data) => ({
  type: types.GET_STORIES_SUCCESS,
  payload: data,
});

export const getStoriesFail = () => ({
  type: types.GET_STORIES_FAIL,
});

export const clearStories = () => ({
  type: types.CLEAR_STORIES,
});
