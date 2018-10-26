import { combineReducers } from 'redux'
import CounterReducer from '../modules/counter/counter.state'
// ## Generator Reducer Imports

export const reducers = {
  // Counter sample app state. This can be removed in a live application
  counter: CounterReducer
}

export default combineReducers(reducers)
