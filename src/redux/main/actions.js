import * as types from './types';

export const getMainEventsReviews = (data) => ({
  type: types.GET_MAIN_EVENTS_REVIEWS,
  payload: data,
});

export const getMainEventsReviewsRequest = () => ({
  type: types.GET_MAIN_EVENTS_REVIEWS_REQUEST,
});

export const getMainEventsReviewsSuccess = (data) => ({
  type: types.GET_MAIN_EVENTS_REVIEWS_SUCCESS,
  payload: data,
});

export const getMainEventsReviewsFail = () => ({
  type: types.GET_MAIN_EVENTS_REVIEWS_FAIL,
});

export const clearMain = () => ({
  type: types.CLEAR_MAIN,
});
