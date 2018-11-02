import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';

let title = Platform.select({
  ios: 'Home',
  android: 'More'
})

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <StatusBar
          barStyle="light-content"
          // hidden
          backgroundColor="transparent"
          translucent
        />
        <View style={S.header}>
          <Text>{title}</Text>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    backgroundColor: '#E83A59',
    justifyContent: 'center',
  },
})
