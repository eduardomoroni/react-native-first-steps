import { StyleSheet } from 'react-native'
import { Colors, Metrics } from './Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.silver
  }
})
