import { call, put, takeLatest } from 'redux-saga/effects'; // call, put,
import axios from 'axios';
import * as constants from './constants';
import { setRooms } from './actions';

export function* getRoomsRequest() {
  const dataStatic = yield call(axios.get, 'http://localhost:3000/mocks/rooms');
  yield put(setRooms(dataStatic.data));
}

export function* staticRooms() {
  yield takeLatest(constants.GET_ROOMS, getRoomsRequest);
}

// All sagas to be loaded
export default [
  staticRooms,
];
