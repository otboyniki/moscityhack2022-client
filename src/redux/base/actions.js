export const BASE_ACTION = 'BASE/ACTION';
export const BASE_ACTION_REQUEST = 'BASE/ACTION_REQUEST';
export const BASE_ACTION_SUCCESS = 'BASE/ACTION_SUCCESS';
export const BASE_ACTION_FAIL = 'BASE/ACTION_FAIL';

export const makeBaseAction = () => ({
  type: BASE_ACTION,
});

export const makeBaseActionRequest = () => ({
  type: BASE_ACTION_REQUEST,
});

export const makeBaseActionSuccess = () => ({
  type: BASE_ACTION_SUCCESS,
});

export const makeBaseActionFail = () => ({
  type: BASE_ACTION_FAIL,
});
