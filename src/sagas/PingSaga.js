import {delay} from 'redux-saga';
import { call, put, fork, take} from 'redux-saga/effects';
import { failedPingContact, successPingContact } from '../actions/ping';


export function* pingSaga(name){
//  yield delay(5000);
  const randomPingStatus =true;
  if(randomPingStatus){
    yield put(successPingContact(name));
  }
  else
    yield put(failedPingContact());
}

