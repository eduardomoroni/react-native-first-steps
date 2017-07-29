import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../themes'
import { navButtonColor } from '../NavBarStyle'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.transparent,
    color: navButtonColor,
    justifyContent: 'center',
    marginLeft: Metrics.smallMargin
  }
})
