import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

function* getStories() {
  try {
    yield put(Actions.getStoriesRequest());

    const response = yield call(fetchy, urls.stories);

    yield put(Actions.getStoriesSuccess(response));
  } catch (e) {
    console.warn(e);

    yield put(Actions.getStoriesFail());

    yield put(showNotification({
      id: 'events',
      type: 'error',
      text: 'Произошла ошибка при получении списка историй, пожалуйста, попробуйте позже.',
    }));
  }
}

function* storiesSaga() {
  yield takeLatest(Types.GET_STORIES, getStories);
}

export default storiesSaga;
