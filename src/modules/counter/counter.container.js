import { connect } from 'react-redux'
import Counter from './counter.view'
import {
  valueSelector,
  selectLoading,
  increment,
  random,
  requestRandomNumber,
  reset
} from './counter.state'

const mapStateToProps = state => ({
  counter: valueSelector(state),
  loading: selectLoading(state)
})

const mapActionsToProps = {
  increment,
  random,
  requestRandomNumber,
  reset
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Counter)
