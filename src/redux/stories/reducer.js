import * as types from './types';

const initialState = {
  items: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_STORIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    }

    case types.GET_STORIES_SUCCESS: {
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    }

    case types.GET_STORIES_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.CLEAR_STORIES: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
