import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import SplashScreen from 'react-native-splash-screen'

import { Colors } from 'theme'

import store from '../redux/store'
import Navigator from '../modules/navigator/Navigator.container'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={Colors.transparent} barStyle="light-content" translucent />
          <Navigator />
        </View>
      </Provider>
    )
  }
}
