import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

function* getActivities() {
  try {
    yield put(Actions.getActivitiesRequest());

    const response = yield call(fetchy, urls.activities);

    if (!response) {
      throw response;
    }

    yield put(Actions.getActivitiesSuccess(response.activityItems));
  } catch (e) {
    console.warn(e);

    yield put(Actions.getActivitiesFail());

    yield put(showNotification({
      id: 'events',
      type: 'error',
      text: 'Произошла ошибка при получении списка событий, пожалуйста, попробуйте позже.',
    }));
  }
}

function* activitiesSaga() {
  yield takeLatest(Types.GET_ACTIVITIES, getActivities);
}

export default activitiesSaga;
