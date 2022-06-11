import * as types from './types';

const initialState = {
  items: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ACTIVITIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_ACTIVITIES_SUCCESS: {
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    }

    case types.GET_ACTIVITIES_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
