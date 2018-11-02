/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Card from './card';

export default class App extends Component{
  render() {
    return (
      <View style={S.container}>
        <View style={S.header}>
          <Text>Home</Text>
        </View>
        <View style={S.scrollView}>
          <ScrollView
            // style={S.scrollView}
            // contentContainerStyle={S.scrollView}
          >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ScrollView>
        </View>
        <Text>fdhsj</Text>

      </View>
    );
  }
}

const S = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
  },
  header: {
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    backgroundColor: '#E83A59',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600'
  },
  scrollView: {
    height: 550,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 100,

  }
})
