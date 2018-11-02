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
import Header from './header/header';
// import AndroidHeader from './header/androidHeader';
// import IosHeader from '.s/header/iosHeader';


// const Header = Platform.select({
//   ios: IosHeader,
//   android: AndroidHeader
// })

export default class App extends Component{

  render() {

    return (
      <View style={S.container}>
        <Header/>
        <View>
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
