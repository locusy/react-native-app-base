/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import App from './src/app.js';
import {
  AppRegistry,
} from 'react-native';

export default class MyReactApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('MyReactApp', () => MyReactApp);
