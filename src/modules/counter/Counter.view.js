import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

type Props = {
  navigation: Object,
  counterActions: Function,
  loading: boolean,
  counter: number
}
class CounterView extends Component<Props> {
  increment = () => {
    this.props.counterActions.increment()
  }

  reset = () => {
    this.props.counterActions.reset()
  }

  random = () => {
    this.props.counterActions.random()
  }

  bored = () => {
    this.props.navigation.goBack()
  }

  render() {
    const loadingStyle = this.props.loading ? { backgroundColor: '#eee' } : null

    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Increment counter"
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}
        >
          <Text style={styles.counter}>{this.props.counter}</Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Reset counter" onPress={this.reset}>
          <Text style={styles.linkButton}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Randomize counter" onPress={this.random}>
          <Text style={styles.linkButton}>Random</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.bored}>
          <Text style={styles.linkButton}>{"I'm bored!"}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
})

export default CounterView
