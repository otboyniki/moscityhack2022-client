import * as types from './types';

const initialState = {
  isLoading: false,
  data: null,
  isToggling: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_EVENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    }

    case types.GET_EVENT_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }

    case types.GET_EVENT_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.JOIN_EVENT_REQUEST: {
      return {
        ...state,
        isToggling: true,
      };
    }

    case types.JOIN_EVENT_SUCCESS:
    case types.JOIN_EVENT_FAIL: {
      return {
        ...state,
        isToggling: false,
      };
    }

    case types.CLEAR_EVENT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
