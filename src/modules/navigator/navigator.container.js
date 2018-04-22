import { connect } from 'react-redux'
import NavigatorView from './navigator.view'

export default connect(state => {
  const { navigation } = state
  return {
    navigation
  }
})(NavigatorView)
