import * as types from './types';

const initialState = {
  data: null,
  total: 0,
  page: 0,
  limit: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_EVENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    }

    case types.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    }

    case types.GET_EVENTS_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.CLEAR_EVENTS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
