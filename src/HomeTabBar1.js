import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl
} from 'react-native';

import cardData from './card/mockData';
import Card from './card';

import {
  TabNavigator,
  TabBarTop,
} from 'react-navigation';

class Hotest extends Component{

  state = {
    listRefreshing: false,
    scrollRefreshing: false
  }

  render(){
    let {navigation} = this.props;
     return (
       <View style={S.scrollView}>
         <Text
           onPress={()=>navigation.navigate('More')}
         > 跳转到 More 页面</Text>
         <ScrollView
           refreshControl={
             <RefreshControl
               refreshing={this.state.scrollRefreshing}
               onRefresh={()=>{
                 this.setState({scrollRefreshing: true})
                 setTimeout(()=>{
                   this.setState({scrollRefreshing: false})
                 }, 1500)
               }}
             />
           }
         >
           <Text>ScrollView</Text>
           <Text>ScrollView</Text>
           <Text>ScrollView</Text>
           <Text>ScrollView</Text>
           <Text>ScrollView</Text>
         </ScrollView>
         <FlatList
           data={cardData}
           onRefresh={()=>{
             this.setState({listRefreshing: true})
             setTimeout(()=>{
               this.setState({listRefreshing: false})
             }, 1500)
           }}
           refreshing={this.state.listRefreshing}
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
