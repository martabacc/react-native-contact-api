import { takeLatest } from 'redux-saga/effects';
import { pingSaga } from './PingSaga';

export function* watchPing() {
  yield takeLatest('PING_CONTACT', pingSaga);
}