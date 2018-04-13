import {delay} from 'redux-saga';
import { call, put, fork, take} from 'redux-saga/effects';
import { failedPingContact, successPingContact } from '../actions/ping';


const randomPingStatus = Math.random() > 0.5;

export function* pingSaga(name, pingStatus = randomPingStatus){
  yield delay(5000);
  if(pingStatus){
    yield put(successPingContact(name));
  }
  else
    yield put(failedPingContact());
}

