import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

import Navigator from './Navigator'

const addListener = createReduxBoundAddListener('root')

type Props = {
  dispatch: Function,
  navigation: Object
}
const NavigationView = (props: Props) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.navigation,
      addListener
    })}
  />
)

export default NavigationView
