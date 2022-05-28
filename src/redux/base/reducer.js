import { BASE_ACTION_SUCCESS } from './actions';

const initialState = {
  connected: false,
};

const reducer = (state = initialState, { type } = {}) => {
  switch (type) {
    case BASE_ACTION_SUCCESS: {
      return {
        ...state,
        connected: !true,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
