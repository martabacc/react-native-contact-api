import { pingSaga } from '../../src/sagas/PingSaga';
import {delay} from 'redux-saga';
import {put} from 'redux-saga/effects';
import { failedPingContact, successPingContact } from '../../src/actions/ping';

describe('Ping Sagas', () => {
  it('should put the correct to the yield', () => {
    const generator = pingSaga();
    expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(delay(5000)));
  });

  describe('after delay', () => {
    it('should call successPingContact if ping is successful', () => {
      const name = 'John Doe';
      const generator = pingSaga(name, true);
      generator.next();
      expect(generator.next().value).toEqual(put(successPingContact(name)));
    });
    it('should call failedPingContact if ping is failed', () => {
      const name = 'John Doe';
      const generator = pingSaga(name, false);
      generator.next();
      expect(generator.next().value).toEqual(put(failedPingContact(name)));
    });
  })
});