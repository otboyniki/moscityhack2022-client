import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import fetchy from '@/helpers/fetchy';
import validate from '@/helpers/validate';
import history from '@/helpers/history';

import urls from '@/constants/api';
import { StoryTypes } from '@/constants/enums';
import routes from '@/constants/routes';

import { showNotification } from '../notifications/actions';

import * as Actions from './actions';
import * as Types from './types';
import { getAddStoryBranch } from './selectors';
import { VALIDATORS } from './constants';

function* addStory({ payload }) {
  try {
    yield put(Actions.addStoryRequest());

    const {
      previewId,
      format,
      activityIds,
      title,
      shortDescription,
    } = yield select(getAddStoryBranch);

    const { hasErrors, errors } = validate(VALIDATORS)({
      description: payload.description,
      previewId,
      format,
      activityIds,
      title,
      shortDescription,
    });

    if (hasErrors) {
      yield put(Actions.setValidation(errors));
      yield put(Actions.addStoryFail());

      return;
    }

    const body = {
      title,
      format,
      activityIds,
    };

    if (format === StoryTypes.Text) {
      body.description = payload.description;
      body.shortDescription = shortDescription;
    } else {
      body.previewId = previewId;
    }

    yield call(fetchy, urls.stories, body);

    yield put(Actions.addStorySuccess());

    yield put(showNotification({
      id: 'add-story',
      type: 'success',
      text: 'История создана успешно!',
    }));

    history.push(routes.main);
  } catch (e) {
    console.warn(e);

    yield put(Actions.addStoryFail());

    yield put(showNotification({
      id: 'add-story',
      type: 'error',
      text: 'Произошла ошибка при добавлении истории, пожалуйста, попробуйте позже',
    }));
  }
}

function* addStorySaga() {
  yield takeLatest(Types.ADD_STORY, addStory);
}

export default addStorySaga;
