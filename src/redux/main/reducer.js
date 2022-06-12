import * as types from './types';

const initialState = {
  reviews: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MAIN_EVENTS_REVIEWS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    }

    case types.GET_MAIN_EVENTS_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviews: payload,
        isLoading: false,
      };
    }

    case types.GET_MAIN_EVENTS_REVIEWS_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.CLEAR_MAIN: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
