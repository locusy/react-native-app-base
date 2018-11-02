import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const avatar = require('./WX20181023-102803@2x.png');

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <View style={S.avatarWrap}>
          <Image
            source={require('./WX20181023-102803@2x.png')}
            style={S.avatar}
          />
        </View>

        <View style={S.content}>
          <Text
            style={S.summary}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            atom编辑器社区插件推荐- 最大的 感觉就是用着清爽， 依赖github强大的社区，基于atom的插件也特别丰富，按需
          </Text>
          <Text style={S.time}>11:16</Text>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    // height: 90,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowOffset: {width:0, height:4},
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,
  },
  avatarWrap: {
    marginRight: 18,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45/2
  },
  content: {
    flex: 1,
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#384337'
  },
  time: {
    marginTop: 10,
    color: '#A3ADB4'
  }
})
