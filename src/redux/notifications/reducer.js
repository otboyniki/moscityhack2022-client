import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_NOTIFICATION: {
      const isNotificationExist = state.items.find(({ id }) => id === payload.id);

      if (isNotificationExist) {
        return state;
      }

      return {
        ...state,
        items: state.items.concat({
          id: payload.id,
          type: payload.type,
          text: payload.text,
        }),
      };
    }

    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload.id),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
