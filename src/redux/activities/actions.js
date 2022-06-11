import * as types from './types';

export const getActivities = () => ({
  type: types.GET_ACTIVITIES,
});

export const getActivitiesRequest = () => ({
  type: types.GET_ACTIVITIES_REQUEST,
});

export const getActivitiesSuccess = (data) => ({
  type: types.GET_ACTIVITIES_SUCCESS,
  payload: data,
});

export const getActivitiesFail = () => ({
  type: types.GET_ACTIVITIES_FAIL,
});
