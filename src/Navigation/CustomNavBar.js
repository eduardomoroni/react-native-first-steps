import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Metrics, Fonts } from '../Styles/Themes/'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Drawer from './NavigationDrawerFoo'
import NavBarItems from './NavBarItems'
import Menu from './NavigationMenu'

const openSettingsDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    content: <Menu />,
    open: true,
    side: 'left'
  })
}

class CustomNavBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.leftButton, styles.buttons]}>
          {this.renderLeftButton()}
        </View>
        {this.renderMiddle()}
        <View style={[styles.rightButton, styles.buttons]}>
          {this.renderRightButton()}
        </View>
      </View>
    )
  }

  renderLeftButton () {
    return (
      NavBarItems.navButton({name: 'angle-left'}, NavigationActions.pop)
    )
  }

  renderMiddle () {
    return (
      <Text style={styles.title}>
        Title
      </Text>
    )
  }

  renderRightButton () {
    return (
      NavBarItems.navButton({name: 'sliders'}, openSettingsDrawer)
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: Colors.facebook,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.snow,
    marginTop: Metrics.doubleBaseMargin,
    backgroundColor: Colors.transparent,
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.input
  },
  rightButton: {
    justifyContent: 'flex-end'
  },
  leftButton: {
    justifyContent: 'flex-start'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
