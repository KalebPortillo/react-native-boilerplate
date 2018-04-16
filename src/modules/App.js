import React, { Component } from 'react'
import { StatusBar, ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import SplashScreen from 'react-native-splash-screen'

import { Colors } from 'theme'
import { Loader } from 'components'

import configureStore from '../redux/store'
import Navigator from '../modules/navigator/Navigator.container'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    const { store, persistor } = configureStore()
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <StatusBar backgroundColor={Colors.transparent} barStyle="light-content" translucent />
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
