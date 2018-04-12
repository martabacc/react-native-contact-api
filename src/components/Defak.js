/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import App from './App';
//create store
const store = createStore(rootReducers);

export default class Defak extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

