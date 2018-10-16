import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Colors, AppStyles } from '../theme'

type Props = {
  color?: string,
  size?: string
}

export default function Loader(props: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
  )
}

Loader.defaultProps = {
  color: Colors.snow,
  size: 'large'
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    ...AppStyles.centerChild
  }
})
