import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import { setLogo } from './actions';

export function* getStaticData() {
  try {
    const dataStatic = yield call(axios.get, constants.URL_TEST_MOCK);
    yield put(setLogo(dataStatic.data.objectTest.text));
  } catch (err) {
    throw new Error('Error in getStaticData saga ', err);
  }
}

export function* staticData() {
  yield takeLatest(constants.GET_LOGO, getStaticData);
}

// All sagas to be loaded
export default [
  staticData,
];
