import { StoryTypes } from '@/constants/enums';

import * as types from './types';

const initialState = {
  format: StoryTypes.Text,
  description: '',
  previewId: '',
  activityIds: [],
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case types.SET_STORY: {
      return {
        ...state,
        ...payload,
      };
    }

    case types.CLEAR_STORY: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
