/* eslint-disable no-param-reassign */
import { NavigationActions } from 'react-navigation'
import Navigator from './Navigator'

const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
  const newState = Navigator.router.getStateForAction(action, state)

  // Replace top route with new route
  if (action.params && action.params.replace) {
    // In order to replace the previous route
    // we'll remove the item at index - 1 and then decrement the index.
    newState.routes.splice(newState.index - 1, 1)
    newState.index -= 1
  }

  // Insert 'active' prop on route
  newState.routes.forEach((route, i) => {
    // Make sure we have a route.params
    if (!route.params) route.params = {}
    // Mark route as 'active' if it's position in the routes array
    // matches the index designated on newState
    route.params.active = i === newState.index
  })

  return newState
}
