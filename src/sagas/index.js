import { takeEvery } from 'redux-saga/effects';
import { pingSaga } from './PingSaga';

export function* watchPing() {
  yield takeEvery('PING_CONTACT', pingSaga);
}