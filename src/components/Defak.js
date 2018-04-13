/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import {watchPing} from '../sagas';
//create store

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(watchPing);

export default class Defak extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

