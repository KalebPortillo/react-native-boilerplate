import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import Navigator from 'modules/navigator/Navigator.view'
import { Colors } from 'theme'

import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.transparent} barStyle="light-content" translucent />
        <Navigator />
      </View>
    )
  }
}
