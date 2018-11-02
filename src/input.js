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
  ScrollView,
  FlatList,
  StatusBar,
  TextInput
} from 'react-native';

import Card from './card';
import cardData from './card/mockData';

export default class App extends Component{
  render() {

    return (
      <View style={S.container}>
        <View style={S.header}>
          <StatusBar
            barStyle="light-content"
            // hidden
            backgroundColor="transparent"
            translucent
          />
          <View style={S.titleWrap}>
            <Text style={S.title}>Home</Text>
          </View>
          <View style={S.inputWrap}>
            <TextInput
              style={S.input}
              placeholder="seerch"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={S.scrollView}>
          <FlatList
            data={cardData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
              return (
                <Card
                  {...{
                    source: item.source,
                    content: item.content,
                    time: item.time
                  }}
                />
              )
            }}
          />
        </View>

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
  // header: {
  //   paddingTop: 20,
  //   height: 64,
  //   alignItems: 'center',
  //   backgroundColor: '#E83A59',
  //   justifyContent: 'center',
  // },
  scrollView: {
    // height: 300,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 20,
  },
  header: {
    backgroundColor: '#E83A59',
    ...Platform.select({
      ios: {
        height: 94,
        paddingTop: 20,
      },
      android: {
        height: 98,
        paddingTop: 24,
      }
    })
  },
  titleWrap: {
    marginTop: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff'
  },
  inputWrap: {
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginHorizontal: 8,
    borderRadius: 6,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  input: {
    height: 30,
    padding: 0
  }
})
