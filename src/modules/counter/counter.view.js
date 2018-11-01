import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import { AppStyles, Colors, Fonts, Metrics } from '../../theme'
import { Button } from '../../components'

type Props = {
  navigation: Object,
  increment: Function,
  reset: Function,
  counter: number
}
export default class CounterView extends Component<Props> {
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

        <Button text="Reset" onPress={this.reset} style={styles.linkButton} />
        <Button text="Go Back" onPress={this.bored} />
      </View>
    )
  }
}

const styles = {
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
}
