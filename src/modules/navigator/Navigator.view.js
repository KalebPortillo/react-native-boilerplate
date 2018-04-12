import { StackNavigator } from 'react-navigation'
import { Easing, Animated } from 'react-native'

import Home from 'modules/home/Home.view'
import Counter from 'modules/counter/Counter.container'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      })

      return { transform: [{ translateX }] }
    }
  }
}

// Root navigator is a StackNavigator
const Navigator = StackNavigator(
  {
    Home: { screen: Home },
    Counter: { screen: Counter }
  },
  {
    headerMode: 'none',
    transitionConfig
  }
)

export default Navigator
