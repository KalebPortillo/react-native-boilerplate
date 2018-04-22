import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './src/redux/store'

import App from './src/modules/app'

const { store, persistor } = configureStore()

const Main = () => (
  <Provider store={store}>
    <App persistor={persistor} />
  </Provider>
)

AppRegistry.registerComponent('boilerplate', () => Main)
