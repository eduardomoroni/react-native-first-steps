import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import NavBarItems from './NavBarItems'
import Menu from '../Containers/CardSearch/ListCardFilterMenu'
import { formValueSelector } from 'redux-form'
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
    const { showCardsAs } = this.props
    return (
      <View style={[customBarStyle.container, builtInBarStyle.navigationBarStyle]}>
        <View style={[customBarStyle.leftButton, customBarStyle.buttons]}>
          {this.renderLeftButton()}
        </View>
        {this.renderMiddle()}
        <View style={[customBarStyle.rightButton, customBarStyle.buttons]}>
          {this.renderRightButton(showCardsAs === 'image' ? 'th-list' : 'th-large', openSettingsDrawer)}
          {this.renderRightButton('sliders', openSettingsDrawer)}
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

  renderRightButton (buttonType, callBack) {
    return (
      NavBarItems.navButton({name: buttonType, size: Metrics.icons.small + 5}, callBack)
    )
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    showCardsAs: selector(state, 'showCardsAs')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
