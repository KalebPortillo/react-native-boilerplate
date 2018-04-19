import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CounterScene from './Counter.view'
import * as CounterState from './Counter.state'

export default connect(
  state => {
    const { counter } = state
    return {
      counter: CounterState.valueSelector(state),
      loading: counter.loading
    }
  },
  dispatch => ({
    counterActions: bindActionCreators(CounterState, dispatch)
  })
)(CounterScene)
