import { call, put, takeLatest } from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';
import matchPathname from '@/helpers/matchPathname';

import urls from '@/constants/api';
import routes from '@/constants/routes';

import { showNotification } from '../notifications/actions';
import * as AuthActions from '../auth/actions';

import * as actions from './actions';
import * as types from './types';

function* getUserProfile() {
  try {
    yield put(actions.getUserProfileRequest());

    const routesWithout401Check = [
      routes.login,
      routes.registration,
      routes.registrationConfirm,
      routes.quickRegistration,
      routes.main,
      routes.events,
      routes.event,
    ];

    const isRouteMatched = matchPathname(
      routesWithout401Check,
      window.location.pathname,
      { exact: true },
    );

    const response = yield call(fetchy, urls.userProfile, {}, {
      without401check: isRouteMatched,
    });

    yield put(actions.getUserProfileSuccess(response));

    if (response) {
      yield put(AuthActions.loginSuccess());
    }
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
