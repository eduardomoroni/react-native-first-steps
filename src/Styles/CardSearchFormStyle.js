import { Metrics } from '../Styles/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    marginHorizontal: Metrics.marginHorizontal,
    paddingTop: Metrics.navBarHeight + Metrics.smallMargin
  },
  containerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  twoFieldsPerLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftField: {
    flex: 1,
    justifyContent: 'flex-start',
    marginRight: Metrics.smallMargin / 2
  },
  rightField: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: Metrics.smallMargin / 2
  }
})
