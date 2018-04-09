import React from 'react'
import { View, StatusBar } from 'react-native'

import Navigator from 'modules/navigator/Navigator.view'
import { Colors } from 'theme'

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={Colors.transparent} barStyle="light-content" translucent />
    <Navigator />
  </View>
)
