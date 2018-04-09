import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from 'modules/App'
import store from './src/redux/store'

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('boilerplate', () => Main)
