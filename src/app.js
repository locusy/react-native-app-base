import React, { Component } from 'react';
// import Content from './flex'
// import Content from './cards'
// import Content from './scroll'
// import Content from './flatlist'
// import Content from './crossflatform'
// import Content from './input'
// import Content from './icon'
// import Content from './navigate'
// import Content from './tab-navigator'
// import Content from './stack-navigator'
// import Content from './drawer-navigator'
// import Content from './TabBarBottom'
import Content from './RefreshControl'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Content />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
