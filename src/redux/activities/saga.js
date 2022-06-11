import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

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
  }
}

function* activitiesSaga() {
  yield takeLatest(Types.GET_ACTIVITIES, getActivities);
}

export default activitiesSaga;
