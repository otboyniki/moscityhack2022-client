import {
  takeLatest,
  put,
  select,
  call,
} from 'redux-saga/effects';

import isMobilePhone from 'validator/lib/isMobilePhone';

import history from '@/helpers/history';
import validate from '@/helpers/validate';
import fetchy from '@/helpers/fetchy';

import routes from '@/constants/routes';
import urls from '@/constants/api';
import { QuickRegistrationTypes, UserRoles } from '@/constants/enums';

import getQueryParams from '@/helpers/getQueryParams';
import * as AuthActions from './actions';
import * as AuthTypes from './types';
import { selectAuthData } from './selectors';

import { showNotification } from '../notifications/actions';

import {
  CONFIRM_REGISTRATION_VALIDATORS,
  LOGIN_VALIDATORS,
  QUICK_REGISTER_VALIDATORS,
  REGISTER_VALIDATORS,
} from './constants';

function* login() {
  try {
    yield put(AuthActions.loginRequest());

    const { communication } = yield select(selectAuthData);

    const { hasErrors, errors } = validate(LOGIN_VALIDATORS)({ communication });

    if (hasErrors) {
      yield put(AuthActions.setValidation(errors));
      yield put(AuthActions.loginFail());

      return;
    }

    const body = {
      communication: {
        type: isMobilePhone(communication, 'ru-RU')
          ? QuickRegistrationTypes.Phone
          : QuickRegistrationTypes.Email,
        value: communication,
      },
    };

    const response = yield call(fetchy, urls.login, body);

    if (!response) {
      throw response;
    }

    yield put(AuthActions.loginSuccess());

    history.push(`${routes.registrationConfirm}?id=${response.id}`);
  } catch (e) {
    console.warn(e);

    yield put(AuthActions.loginFail());

    yield put(showNotification({
      id: 'sign-in',
      type: 'error',
      text: 'Произошла ошибка при авторизации, пожалуйста, попробуйте позже.',
    }));
  }
}

function* register() {
  try {
    yield put(AuthActions.registerRequest());

    const {
      firstName,
      lastName,
      email,
      type,
      companyName,
    } = yield select(selectAuthData);

    const { hasErrors, errors } = validate(REGISTER_VALIDATORS)({
      firstName,
      lastName,
      email,
      type,
      companyName,
    });

    if (hasErrors) {
      yield put(AuthActions.setValidation(errors));
      yield put(AuthActions.registerFail());

      return;
    }

    const url = type === UserRoles.Volunteer
      ? urls.registrationVolunteer
      : urls.registrationOrganizer;

    const body = {
      firstName,
      lastName,
      email,
      companyName,
    };

    const response = yield call(fetchy, url, body);

    if (!response) {
      throw response;
    }

    yield put(AuthActions.registerSuccess());

    history.push(`${routes.registrationConfirm}?id=${response.id}`);
  } catch (e) {
    console.warn(e);

    yield put(AuthActions.registerFail());

    yield put(showNotification({
      id: 'sign-up',
      type: 'error',
      text: 'Произошла ошибка при регистрации, пожалуйста, попробуйте позже.',
    }));
  }
}

function* quickRegister() {
  try {
    yield put(AuthActions.quickRegisterRequest());

    const {
      firstName,
      communication,
    } = yield select(selectAuthData);

    const { hasErrors, errors } = validate(QUICK_REGISTER_VALIDATORS)({ firstName, communication });

    if (hasErrors) {
      yield put(AuthActions.setValidation(errors));
      yield put(AuthActions.quickRegisterFail());

      return;
    }

    const body = {
      firstName,
      communication: {
        type: isMobilePhone(communication, 'ru-RU')
          ? QuickRegistrationTypes.Phone
          : QuickRegistrationTypes.Email,
        value: communication,
      },
    };

    const response = yield call(fetchy, urls.quickRegistration, body);

    if (!response) {
      throw response;
    }

    yield put(AuthActions.quickRegisterSuccess());

    history.push(`${routes.registrationConfirm}?id=${response.id}`);
  } catch (e) {
    console.warn(e);

    yield put(AuthActions.quickRegisterFail());

    yield put(showNotification({
      id: 'sign-up',
      type: 'error',
      text: 'Произошла ошибка при регистрации, пожалуйста, попробуйте позже.',
    }));
  }
}

function* confirmRegistration() {
  try {
    yield put(AuthActions.confirmRegistrationRequest());

    const { code } = yield select(selectAuthData);

    const { hasErrors, errors } = validate(CONFIRM_REGISTRATION_VALIDATORS)({ code });

    if (hasErrors) {
      yield put(AuthActions.setValidation(errors));
      yield put(AuthActions.confirmRegistrationFail());

      return;
    }

    const { id } = getQueryParams();

    const body = {
      id,
      code,
    };

    const response = yield call(fetchy, urls.registrationConfirm, body);

    if (!response) {
      throw response;
    }

    yield put(AuthActions.confirmRegistrationSuccess());

    localStorage.setItem('isAuthorized', true);

    window.location.href = routes.main;
  } catch (e) {
    console.warn(e);

    yield put(AuthActions.confirmRegistrationFail());

    if (e instanceof Response) {
      const data = yield e.json();

      yield put(showNotification({
        id: 'confirm-registration',
        type: 'error',
        text: data.message,
      }));
    } else {
      yield put(showNotification({
        id: 'confirm-registration',
        type: 'error',
        text: 'Произошла ошибка при подтверждении регистрации, пожалуйста, попробуйте позже.',
      }));
    }
  }
}

function* logout() {
  try {
    yield put(AuthActions.logoutRequest());

    yield call(fetchy, urls.logout, {});

    localStorage.removeItem('isAuthorized');

    window.location.href = routes.main;
  } catch (e) {
    yield put(AuthActions.logoutFail());
  }
}

function* authSaga() {
  yield takeLatest(AuthTypes.LOGIN, login);
  yield takeLatest(AuthTypes.REGISTER, register);
  yield takeLatest(AuthTypes.QUICK_REGISTER, quickRegister);
  yield takeLatest(AuthTypes.CONFIRM_REGISTRATION, confirmRegistration);
  yield takeLatest(AuthTypes.LOGOUT, logout);
}

export default authSaga;
