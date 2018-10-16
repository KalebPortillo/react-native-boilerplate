import { combineReducers } from 'redux'
import CounterReducer from '../modules/counter/counter.state'
import NavigatorReducer from '../modules/navigator/navigator.state'
// ## Generator Reducer Imports

export const reducers = {
  // Counter sample app state. This can be removed in a live application
  counter: CounterReducer,
  navigation: NavigatorReducer
}

export default combineReducers(reducers)
