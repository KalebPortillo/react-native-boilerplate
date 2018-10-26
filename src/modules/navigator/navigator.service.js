import { NavigationActions } from 'react-navigation'

let NAVIGATOR

function setTopLevelNavigator(navigatorRef) {
  NAVIGATOR = navigatorRef
}

function navigate(routeName, params) {
  NAVIGATOR.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

// add other navigation functions that you need and export them
const NavigationService = {
  navigate,
  setTopLevelNavigator
}
export default NavigationService
