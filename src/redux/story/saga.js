import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

function* getStoryBase({ payload }) {
  const response = yield call(fetchy, `${urls.stories}/${payload.id}`);

  yield put(Actions.getStorySuccess(response));
}

function* getStory({ payload }) {
  try {
    yield put(Actions.getStoryRequest());

    yield call(getStoryBase, { payload });
  } catch (e) {
    console.warn(e);

    yield put(Actions.getStoryFail());

    yield put(showNotification({
      id: 'get-story',
      type: 'error',
      text: 'Произошла ошибка при получении информации об истории, пожалуйста, попробуйте позже.',
    }));
  }
}

function* addComment({ payload }) {
  try {
    yield put(Actions.addCommentRequest());

    const body = {
      text: payload.text,
    };

    yield call(fetchy, `${urls.stories}/${payload.storyId}/comment`, body);

    yield call(getStoryBase, { payload: { id: payload.storyId } });

    yield put(Actions.addCommentSuccess());
  } catch (e) {
    console.warn(e);

    yield put(Actions.addCommentFail());

    yield put(showNotification({
      id: 'add-comment',
      type: 'error',
      text: 'Произошла ошибка при добавлении комментария, пожалуйста, попробуйте позже.',
    }));
  }
}

function* setCommentRating({ payload }) {
  try {
    yield put(Actions.setCommentRatingRequest(payload));

    yield call(fetchy, `${urls.stories}/${payload.storyId}/comment/${payload.commentId}/${payload.ratingChangeType}`, {});

    yield call(getStoryBase, { payload: { id: payload.storyId } });

    yield put(Actions.setCommentRatingSuccess());
  } catch (e) {
    console.warn(e);

    yield put(Actions.setCommentRatingFail());

    yield put(showNotification({
      id: 'set-comment-rating',
      type: 'error',
      text: 'Произошла ошибка при обновлении комментария, пожалуйста, попробуйте позже.',
    }));
  }
}

function* getStorySaga() {
  yield takeLatest(Types.GET_STORY, getStory);
  yield takeLatest(Types.ADD_COMMENT, addComment);
  yield takeLatest(Types.SET_COMMENT_RATING, setCommentRating);
}

export default getStorySaga;
