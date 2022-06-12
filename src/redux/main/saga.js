import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

function* getMainEventsReviews() {
  try {
    yield put(Actions.getMainEventsReviewsRequest());

    const response = yield call(fetchy, urls.mainEventsReviews);

    yield put(Actions.getMainEventsReviewsSuccess(response));
  } catch (e) {
    console.warn(e);

    yield put(Actions.getMainEventsReviewsFail());

    yield put(showNotification({
      id: 'events',
      type: 'error',
      text: 'Произошла ошибка при получении списка событий, пожалуйста, попробуйте позже.',
    }));
  }
}

function* mainSaga() {
  yield takeLatest(Types.GET_MAIN_EVENTS_REVIEWS, getMainEventsReviews);
}

export default mainSaga;
