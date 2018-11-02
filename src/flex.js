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
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={[style.container, style.other]}>
        <View style={style.subBox}>
          <Text style={style.text}>subBox111111</Text>
        </View>
        <View style={style.subBox}>
          <Text style={style.text}>subBox2222</Text>
        </View>
        <View style={[style.subBox, style.subBox3]}>
          <Text style={style.text}>subBox33333333333</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // display: 'flex',
    flex:1,
    // flexDirection: 'row',
    flexDirection: 'column',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    backgroundColor: 'skyblue',
    height: 500
  },

  subBox: {
    backgroundColor: 'red',
    // alignSelf: 'flex-start',
    height: 50,
    flex: 1,
    // width: 200
  },
  subBox3: {
    // alignSelf: 'flex-start',
    backgroundColor: 'blue',
  },
  text: {

  }
})
