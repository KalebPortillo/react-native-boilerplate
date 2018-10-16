import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, AppStyles } from '../theme'

type Props = {
  onPress: Function,
  text: string,
  style?: number | Object | Array<number>,
  textStyle?: number | Object | Array<number>
}

export default function AwesomeButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={[styles.text, props.textStyle]}>{props.text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

AwesomeButton.defaultProps = {
  style: undefined,
  textStyle: undefined
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: Metrics.doubleSection,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    ...AppStyles.centerChild,
    ...AppStyles.buttonBorder
  },
  text: {
    ...Fonts.style.normal,
    color: Colors.bloodOrange
  }
})
