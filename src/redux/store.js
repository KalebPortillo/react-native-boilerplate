/* eslint-disable no-undef, global-require, no-underscore-dangle, prefer-const */

import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
// import logger from 'redux-logger' // Pass this middleware if you want to log actions on console
import rootReducer from './reducer'

// Configure listener
const navigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation // <-- make sure this is where your nav state lives (i.e. if your redux state is at `state.nav` use state => state.nav instead)
)

const enhancers = [applyMiddleware(thunkMiddleware, navigatorMiddleware)]
/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
const composeEnhancers =
  (__DEV__ && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const enhancer = composeEnhancers(...enhancers)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, enhancer)
let persistor = persistStore(store)
if (__DEV__) persistor.purge() // Comment this line if you want persisted store on dev

if (module.hot) {
  module.hot.accept(() => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require('./reducer').default
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer))
  })
}

export default () => ({ store, persistor })
