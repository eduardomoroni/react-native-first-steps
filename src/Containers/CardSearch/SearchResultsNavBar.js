import React, { Component } from 'react'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { navBackButton, navTitle, navButtonBar, openDrawer } from '../../Navigation/NavBarItems'
import { switchDisplayMode as switchDisplayModeAction } from '../../Redux/Actions'
import Menu from '../CardSearch/ListCardFilterMenu'
import CustomNavBar from '../../Navigation/CustomNavBar'

class SearchResultsNavBar extends Component {
  render () {
    const { showCardsAs, switchDisplayMode } = this.props

    const settingsButton = {
      buttonProps: {name: 'sliders'},
      callback: () => openDrawer(<Menu />)
    }

    const displayModeButton = {
      buttonProps: {name: showCardsAs === 'image' ? 'th-list' : 'th-large'},
      callback: () => switchDisplayMode()
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
  const selector = formValueSelector('CardSearchFilter')
  return {
    showCardsAs: selector(state, 'showCardsAs')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchDisplayMode: () => dispatch(switchDisplayModeAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsNavBar)
