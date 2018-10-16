import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import { AppStyles, Colors, Fonts, Metrics } from '../../theme'
import { AwesomeButton } from '../../components'

type Props = {
  navigation: Object,
  increment: Function,
  reset: Function,
  counter: number
}
class CounterView extends Component<Props> {
  increment = () => {
    this.props.increment()
  }

  reset = () => {
    this.props.reset()
  }

  bored = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Increment counter"
          onPress={this.increment}
          style={styles.counterButton}
        >
          <Text style={styles.counter}>{this.props.counter}</Text>
        </TouchableOpacity>

        <AwesomeButton text="Reset" onPress={this.reset} style={styles.linkButton} />
        <AwesomeButton text="Go Back" onPress={this.bored} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...AppStyles.centerChild,
    backgroundColor: Colors.coal
  },
  counterButton: {
    backgroundColor: Colors.panther,
    ...AppStyles.centerChild,
    ...AppStyles.buttonBorder,
    margin: Metrics.section,
    padding: Metrics.baseMargin
  },
  counter: {
    ...Fonts.style.h2,
    color: Colors.snow,
    textAlign: 'center'
  },
  linkButton: {
    marginBottom: Metrics.baseMargin
  }
})

export default CounterView
