import { Platform } from 'react-native'

const type = {
  opensans: Platform.select({ android: 'opensans-regular', ios: 'Open Sans' }),
  raleway: Platform.select({ android: 'raleway-regular', ios: 'Raleway' }),
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.raleway,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.raleway,
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.raleway,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.raleway,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.raleway,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.raleway,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.opensans,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.opensans,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
