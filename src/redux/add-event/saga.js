import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';
import validate from '@/helpers/validate';
import history from '@/helpers/history';

import urls from '@/constants/api';
import { EventFormats } from '@/constants/enums';
import routes from '@/constants/routes';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';
import { getAddEventBranch } from './selectors';
import { VALIDATORS } from './constants';

function* addEvent({ payload }) {
  try {
    yield put(Actions.addEventRequest());

    const {
      data,
    } = yield select(getAddEventBranch);

    const {
      previewId,
      activityId,
      title,
      location,
      terms,
      recruitment,
      meeting,
      specializations,
    } = data;

    const { hasErrors, errors } = validate(VALIDATORS)({
      previewId,
      activityId,
      title,
      description: payload.description,
      location,
      terms,
      recruitment,
      meeting,
      specializations,
    });

    if (hasErrors) {
      yield put(Actions.setValidation(errors));
      yield put(Actions.addEventFail());

      return;
    }

    const body = {
      previewId,
      activityId,
      title,
      terms,
      description: payload.description,
      locations: [
        {
          stringLocation: location,
        },
      ],
      recruitment,
      meeting,
      specializations: specializations.map((specialization) => ({
        title: specialization.title,
        requirements: specialization.requirements,
        description: specialization.description,
        isOnline: specialization.format === EventFormats.Online,
        ages: {
          from: specialization.age[0],
          to: specialization.age[1],
        },
        minVolunteersNumber: specialization.minVolunteersNumber,
        maxVolunteersNumber: specialization.maxVolunteersNumber,
      })),
    };

    yield call(fetchy, urls.events, body);

    yield put(Actions.addEventSuccess());

    yield put(showNotification({
      id: 'add-event',
      type: 'success',
      text: 'Cобытие добавлено успешно',
    }));

    history.push(routes.events);
  } catch (e) {
    console.warn(e);

    yield put(Actions.addEventFail());

    yield put(showNotification({
      id: 'add-event',
      type: 'error',
      text: 'Произошла ошибка при добавлении события, пожалуйста, попробуйте позже.',
    }));
  }
}

function* addEventSaga() {
  yield takeLatest(Types.ADD_EVENT, addEvent);
}

export default addEventSaga;
