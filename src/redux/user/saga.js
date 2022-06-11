import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';

import urls from '@/constants/api';

import { showNotification } from '../notifications/actions';
import * as AuthActions from '../auth/actions';

import * as actions from './actions';
import * as types from './types';

function* getUserProfile() {
  try {
    yield put(actions.getUserProfileRequest());

    const response = yield call(fetchy, urls.userProfile);

    if (!response) {
      throw response;
    }

    yield put(actions.getUserProfileSuccess(response));
    yield put(AuthActions.loginSuccess());
  } catch (e) {
    console.warn(e);

    yield put(actions.getUserProfileFail());

    yield put(showNotification({
      id: 'user-profile',
      type: 'error',
      text: 'Произошла ошибка при получении информации о пользователе, пожалуйста, попробуйте позже.',
    }));
  }
}

function* userSaga() {
  yield takeLatest(types.GET_USER_PROFILE, getUserProfile);
}

export default userSaga;
