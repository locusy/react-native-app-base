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
import Header from './header';

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';

function Home(props){
 let {navigation} = props;
  return (
    <View style={S.scrollView}>
      <Text
        onPress={()=>navigation.navigate('More')}
      > 跳转到 More 页面</Text>
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
  )
}
function More({navigation}){
  return (
    <View>
      <Text>More 的页面</Text>
      <Text
        onPress={()=>navigation.navigate('Home')}
      > 跳转到 Home 页面</Text>
      <Text
        onPress={()=>navigation.navigate('DrawerOpen')}
      > 打开抽屉</Text>
    </View>
  )
}

const Navigator = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  More:{
    screen: More ,
    navigationOptions: {
      title: 'More'
    }
  }
});

export default class App extends Component{

  render() {

    return (
      <View style={S.container}>
        <Header/>
        <Navigator/>

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
    // marginBottom: 20
  }
})
