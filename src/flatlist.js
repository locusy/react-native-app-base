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
} from 'react-native';

import Card from './card';
import cardData from './card/mockData';

export default class App extends Component{
  render() {

    return (
      <View style={S.container}>
        <View style={S.header}>
          <Text>Home</Text>
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
    // height: 300,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 20,

  }
})
