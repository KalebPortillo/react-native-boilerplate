import { connect } from 'react-redux'
import NavigatorView from './Navigator.view'

export default connect(state => {
  const { navigation } = state
  return {
    navigation
  }
})(NavigatorView)
