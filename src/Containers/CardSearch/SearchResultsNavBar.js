/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { navBackButton, navTitle, navButtonBar, openDrawer } from '../../Navigation/NavBarItems'
import { switchDisplayMode as switchDisplayModeAction } from '../../Redux/Actions'
import Menu from '../CardSearch/ListCardFilterMenu'
import CustomNavBar from '../../Navigation/CustomNavBar'
import type { Dispatch } from 'redux'

export class SearchResultsNavBar extends Component {
  render () {
    const { showCardsAs, switchDisplayMode } = this.props

    const settingsButton = {
      buttonProps: {name: 'sliders'},
      callback: () => openDrawer(<Menu />)
    }

    const displayModeButton = {
      buttonProps: {name: showCardsAs === 'image' ? 'th-list' : 'th-large'},
      callback: () => switchDisplayMode(showCardsAs === 'image' ? 'list' : 'image')
    }

    return (
      <CustomNavBar
        leftRender={navBackButton()}
        middleRender={navTitle('searching_cards')}
        rightRender={navButtonBar([displayModeButton, settingsButton])} />
    )
  }
}

const mapStateToProps = (state) => {
  const { showCardsAs } = state.cardSearch
  return {
    showCardsAs
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    switchDisplayMode: (toggle) => dispatch(switchDisplayModeAction(toggle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsNavBar)
