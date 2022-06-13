import * as types from './types';

const initialState = {
  data: null,
  loaders: {
    storyRating: false,
    comment: false,
  },
  changedRatingCommentId: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_STORY_REQUEST: {
      return {
        ...state,
        data: null,
      };
    }

    case types.GET_STORY_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }

    case types.ADD_COMMENT_REQUEST: {
      return {
        ...state,
        loaders: {
          ...state.loaders,
          comment: true,
        },
      };
    }

    case types.ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        loaders: {
          ...state.loaders,
          comment: false,
        },
      };
    }

    case types.ADD_COMMENT_FAIL: {
      return {
        ...state,
        loaders: {
          ...state.loaders,
          comment: false,
        },
      };
    }

    case types.SET_COMMENT_RATING_REQUEST: {
      return {
        ...state,
        changedRatingCommentId: payload.commentId,
      };
    }

    case types.SET_COMMENT_RATING_SUCCESS:
    case types.SET_COMMENT_RATING_FAIL: {
      return {
        ...state,
        changedRatingCommentId: null,
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
