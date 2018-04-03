/* import { fork } from 'redux-saga/effects';
import appSagas from '../../web/app/containers/App/sagas';

export default function* root() {
  console.log(appSagas);
  yield fork(appSagas);
  /* yield all([
    ...appSagas,
  ])
}*/
