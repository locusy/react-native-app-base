import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import cardData from './card/mockData';
import Card from './card';

import {
  TabNavigator,
  TabBarTop
} from 'react-navigation';

function Hotest(props){
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


function Newest(){
  return (
    <View><Text>Newest的界面</Text></View>
  )
}

export default TabNavigator({
  Hotest: {
    screen: Hotest
  },
  Newest: {
    screen: Newest
  }
},{
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#EC4D3D',
    inactiveTintColor: '#EC4D3D',
    labelStyle: {
      fontWeight: '800'
    },
    indicatorStyle: {
      height: 4,
      backgroundColor: '#EC4D3D'
    },
    style: {
      backgroundColor: '#fff'
    }
  }
});

const S = StyleSheet.create({
  scrollView: {
    // height: 300,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 20,
  }
})
