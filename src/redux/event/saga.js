import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';

function* getEvent({ payload }) {
  try {
    yield put(Actions.getEventRequest());

    const response = yield call(fetchy, `${urls.events}/${payload.id}`);

    if (!response) {
      throw response;
    }

    yield put(Actions.getEventSuccess(response));
  } catch (e) {
    console.warn(e);

    yield put(Actions.getEventFail());

    yield put(showNotification({
      id: 'join-event',
      type: 'error',
      text: 'Произошла ошибка при получении информации о событии, пожалуйста, попробуйте позже.',
    }));
  }
}

function* joinEvent({ payload }) {
  try {
    yield put(Actions.joinEventRequest());

    const {
      eventId,
      specializationId,
      isParticipant,
    } = payload;

    const eventAction = isParticipant
      ? 'leave'
      : 'join';

    yield call(fetchy, `${urls.events}/${eventId}/specializations/${specializationId}/${eventAction}`, {});

    yield put(Actions.joinEventSuccess());

    yield put(showNotification({
      id: 'join-event',
      type: 'success',
      text: isParticipant
        ? 'Вы успешно отказались от участия в событии!'
        : 'Вы успешно зарегистрировались на событие!',
    }));

    yield call(getEvent, { payload: { id: eventId } });
  } catch (e) {
    console.warn(e);

    yield put(Actions.joinEventFail());

    yield put(showNotification({
      id: 'join-event',
      type: 'error',
      text: 'Произошла ошибка, пожалуйста, попробуйте позже.',
    }));
  }
}

function* activitiesSaga() {
  yield takeLatest(Types.GET_EVENT, getEvent);
  yield takeLatest(Types.JOIN_EVENT, joinEvent);
}

export default activitiesSaga;
