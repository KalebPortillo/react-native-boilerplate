import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CounterScene from './Counter.view'
import * as CounterActions from './Counter.state'

export default connect(
  (state) => {
    const { counter } = state
    return {
      counter: counter.value,
      loading: counter.loading
    }
  },
  dispatch => ({
    counterActions: bindActionCreators(CounterActions, dispatch)
  })
)(CounterScene)
