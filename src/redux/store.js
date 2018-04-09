/* eslint-disable no-undef, global-require, no-underscore-dangle */

import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// import logger from 'redux-logger' // Pass this middleware if you want to log actions on console

import reducer from './reducer'

const enhancers = [applyMiddleware(thunkMiddleware)]

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */

const composeEnhancers =
  (__DEV__ && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancers(...enhancers)

// create the store
const store = createStore(reducer, enhancer)

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
