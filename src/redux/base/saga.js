import { takeLatest, put } from 'redux-saga/effects';
import { BASE_ACTION, makeBaseActionSuccess } from './actions';

function* makeBaseAction() {
  yield put(makeBaseActionSuccess());
}

function* baseSaga() {
  yield takeLatest(BASE_ACTION, makeBaseAction);
}

export default baseSaga;
