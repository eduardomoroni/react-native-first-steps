// @flow

import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from './Themes/'
export const navButtonColor = Colors.snow

export const builtInBarStyle = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: Colors.facebook
  },
  titleStyle: {
    color: navButtonColor,
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.input
  },
  leftButtonIconStyle: {
    tintColor: navButtonColor
  },
  rightButtonIconStyle: {
    tintColor: navButtonColor
  }
})

export const customBarStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  rightButton: {
    justifyContent: 'flex-end'
  },
  leftButton: {
    justifyContent: 'flex-start'
  }
})

export const drawerStyle = {
  drawer: {
    backgroundColor: Colors.facebook
  },
  main: {
    backgroundColor: Colors.facebook
  }
}
