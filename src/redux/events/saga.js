import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';
import { stringifyUrl } from '@/helpers/stringifyUrl';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

import { mapFilter } from './helpers';

function* getEvents({ payload }) {
  try {
    yield put(Actions.getEventsRequest());

    const response = yield call(fetchy, stringifyUrl(mapFilter(payload), urls.events));

    if (!response) {
      throw response;
    }

    yield put(Actions.getEventsSuccess(response));
  } catch (e) {
    console.warn(e);

    yield put(Actions.getEventsFail());

    yield put(showNotification({
      id: 'events',
      type: 'error',
      text: 'Произошла ошибка при получении списка событий, пожалуйста, попробуйте позже.',
    }));
  }
}

function* activitiesSaga() {
  yield takeLatest(Types.GET_EVENTS, getEvents);
}

export default activitiesSaga;
