import * as types from './types';

export const getStory = (data) => ({
  type: types.GET_STORY,
  payload: data,
});

export const getStoryRequest = () => ({
  type: types.GET_STORY_REQUEST,
});

export const getStorySuccess = (data) => ({
  type: types.GET_STORY_SUCCESS,
  payload: data,
});

export const getStoryFail = () => ({
  type: types.GET_STORY_FAIL,
});

export const addComment = (data) => ({
  type: types.ADD_COMMENT,
  payload: data,
});

export const addCommentRequest = () => ({
  type: types.ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = () => ({
  type: types.ADD_COMMENT_SUCCESS,
});

export const addCommentFail = () => ({
  type: types.ADD_COMMENT_FAIL,
});

export const setCommentRating = (data) => ({
  type: types.SET_COMMENT_RATING,
  payload: data,
});

export const setCommentRatingRequest = (data) => ({
  type: types.SET_COMMENT_RATING_REQUEST,
  payload: data,
});

export const setCommentRatingSuccess = (data) => ({
  type: types.SET_COMMENT_RATING_SUCCESS,
  payload: data,
});

export const setCommentRatingFail = (data) => ({
  type: types.SET_COMMENT_RATING_FAIL,
  payload: data,
});

export const clearStory = () => ({
  type: types.CLEAR_STORY,
});
