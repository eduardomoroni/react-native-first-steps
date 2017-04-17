import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { backButton, navTitle, navButtonBar } from '../../Navigation/NavBarItems'
import { formValueSelector } from 'redux-form'
import Menu from '../CardSearch/ListCardFilterMenu'
import CustomNavBar from '../../Navigation/CustomNavBar'

const openSettingsDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    content: <Menu />,
    open: true,
    side: 'left'
  })
}

class SearchResultsNavBar extends Component {
  render () {
    const { showCardsAs } = this.props

    const settingsButton = {
      buttonProps: {name: 'sliders'},
      callback: openSettingsDrawer
    }

    const displayModeButton = {
      buttonProps: {name: showCardsAs === 'image' ? 'th-list' : 'th-large'},
      callback: openSettingsDrawer
    }

    return (
      <CustomNavBar
        leftRender={backButton()}
        middleRender={navTitle('Busca Simples')}
        rightRender={navButtonBar([displayModeButton, settingsButton])} />
    )
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    showCardsAs: selector(state, 'showCardsAs')
  }
}

export default connect(mapStateToProps)(SearchResultsNavBar)
