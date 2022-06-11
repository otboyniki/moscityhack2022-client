import * as types from './types';

export const getUserProfile = () => ({
  type: types.GET_USER_PROFILE,
});

export const getUserProfileRequest = () => ({
  type: types.GET_USER_PROFILE_REQUEST,
});

export const getUserProfileSuccess = (data) => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload: data,
});

export const getUserProfileFail = () => ({
  type: types.GET_USER_PROFILE_FAIL,
});
