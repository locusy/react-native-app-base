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

import Header from './header';

import HomeTabBar from './HomeTabBar1'

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  TabBarBottom
} from 'react-navigation';

// import Icon from 'react-native-vector-icons/Octicons';

function More({navigation}){
  return (
    <View>
      <Text>More 的页面</Text>
      <Text
        onPress={()=>navigation.navigate('Home')}
      > 跳转到 Home 页面</Text>
      <Text
        onPress={()=>navigation.navigate('DrawerToggle')}
      > 打开抽屉</Text>
    </View>
  )
}

const Navigator = TabNavigator({
  Home: {
    screen: HomeTabBar,
    navigationOptions: {
      title: 'Home',
      // tabBarIcon: ({tintColor})=>(<Icon name="home" size={22} color={tintColor}/>)
    }
  },
  More:{
    screen: More ,
    navigationOptions: {
      title: 'More',
      // tabBarIcon: ({tintColor})=>(<Icon name="book" size={22} color={tintColor}/>)
    }
  }
},{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#EC4D3D'
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
})
