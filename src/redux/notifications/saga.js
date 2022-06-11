import { delay, put, takeLatest } from 'redux-saga/effects';

import { addNotification, removeNotification, SHOW_NOTIFICATION } from './actions';

function* showNotification({ payload }) {
  try {
    const {
      id,
      type,
      text,
      duration = 3000,
    } = payload;

    yield put(addNotification({
      id,
      type,
      text,
    }));

    yield delay(duration);

    yield put(removeNotification({
      id,
    }));
  } catch (e) {
    console.warn(e);
  }
}

function* notificationSaga() {
  yield takeLatest(SHOW_NOTIFICATION, showNotification);
}

export default notificationSaga;
