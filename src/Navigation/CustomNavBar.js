import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import NavBarItems from './NavBarItems'
import Menu from './NavigationMenu'
import { builtInBarStyle, customBarStyle } from '../Styles/NavBarStyle'
import { Metrics } from '../Styles/Themes'

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
      <View style={[customBarStyle.container, builtInBarStyle.navigationBarStyle]}>
        <View style={[customBarStyle.leftButton, customBarStyle.buttons]}>
          {this.renderLeftButton()}
        </View>
        {this.renderMiddle()}
        <View style={[customBarStyle.rightButton, customBarStyle.buttons]}>
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
      <Text style={builtInBarStyle.titleStyle}>
        Busca Simples
      </Text>
    )
  }

  renderRightButton () {
    return (
      NavBarItems.navButton({name: 'sliders', size: Metrics.icons.small + 5}, openSettingsDrawer)
    )
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
