// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'react-native-drawer'
import { Keyboard } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Menu from './NavigationMenu'
import { connect } from 'react-redux'
import { drawerStyle } from '../Styles/NavBarStyle'

export const menuDrawerProps = {
  key: 'drawer',
  open: false,
  side: 'left',
  type: 'displace',
  content: <Menu />
}

class NavigationDrawer extends Component {
  render () {
    Keyboard.dismiss()
    const state = this.props.navigationState
    const defaultProps = {
      ref: 'navigation',
      open: state.open,
      onOpen: () => NavigationActions.refresh({key: state.key, open: true, side: state.side}),
      onClose: () => NavigationActions.refresh(menuDrawerProps),
      content: state.content,
      styles: drawerStyle,
      tapToClose: true,
      openDrawerOffset: 0.25,
      panCloseMask: 0.25,
      negotiatePan: true,
      type: 'overlay',
      side: state.side, // If we set dynamically to right we're getting error
      tweenHandler: tweenHandler
    } // I need to find a better way to override this props in execution time

    return (
      <Drawer {...defaultProps}>
        <DefaultRenderer navigationState={state.children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

const tweenHandler = (ratio) => {
  return {
    main: {
      opacity: Math.max(0.54, 1 - ratio) }
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func
}

export default connect()(NavigationDrawer)
