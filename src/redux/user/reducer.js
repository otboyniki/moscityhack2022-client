import * as types from './types';

const initialState = {};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case types.GET_USER_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ...payload,
      };
    }

    case types.GET_USER_PROFILE_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.CLEAR_USER: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
