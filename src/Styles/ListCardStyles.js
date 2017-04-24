import { StyleSheet } from 'react-native'
import { Colors, Metrics } from './Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    marginHorizontal: Metrics.smallMargin,
    width: Metrics.screenWidth / 2 - Metrics.smallMargin * 2,
    // TODO: Try to get dynamically Height proportion
    height: (Metrics.screenWidth / 2 - Metrics.smallMargin * 2) * 1.4
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.silver
  }
})
