// @flow

import { Colors, Metrics } from './Themes/'
const buttonsColor = Colors.snow

export default {
  container: {
    flex: 1
  },
  scenePadding: {
    paddingTop: Metrics.navBarHeight
  },
  navBar: {
    backgroundColor: Colors.bloodOrange
  },
  title: {
    color: buttonsColor
  },
  leftButton: {
    tintColor: buttonsColor
  },
  rightButton: {
    color: buttonsColor
  }
}
