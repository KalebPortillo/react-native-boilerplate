import React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'

import Config from 'react-native-config'

import { AwesomeButton } from '../../components'
import { Colors, Metrics, Fonts, Strings, Media, AppStyles } from '../../theme'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu'
})

type Props = {
  navigation: Object
}

export default (props: Props) => (
  <View style={styles.container}>
    <Image source={Media.images.badge} />
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Text style={styles.instructions}>{`${Config.API_URL} / ${Config.GOOGLE_MAPS_API_KEY}`}</Text>
    <AwesomeButton text={Strings.common.button} onPress={() => props.navigation.push('Counter')} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...AppStyles.centerChild,
    backgroundColor: Colors.background
  },
  welcome: {
    ...Fonts.style.h5,
    textAlign: 'center',
    margin: Metrics.baseMargin,
    color: Colors.cloud
  },
  instructions: {
    ...Fonts.style.description,
    textAlign: 'center',
    color: Colors.frost,
    marginBottom: Metrics.baseMargin
  }
})
