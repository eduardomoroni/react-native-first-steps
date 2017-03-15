// @flow

import React, { PropTypes, Component } from 'react'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Menu from './NavigationMenu'
import { connect } from 'react-redux'
import { Colors } from '../Styles/Themes/'

// Everytime I close drawer I certify that the drawer call will be to drawer Menu
setDrawerToDefault = {
  key: 'drawer',
  open: false,
  side: 'left',
  content: <Menu />
}

class NavigationDrawer extends Component {

  render () {
    const state = this.props.navigationState
    const defaultProps = {
      ref: 'navigation',
      type: 'displace',
      open: state.open,
      onOpen: () => NavigationActions.refresh({key: state.key, open: true, side: state.side}),
      onClose: () => NavigationActions.refresh(setDrawerToDefault),
      content: state.content,
      styles: Styles,
      tapToClose: true,
      openDrawerOffset: 0.2,
      panCloseMask: 0.2,
      negotiatePan: true,
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
  navigationState: PropTypes.object
}

const Styles = {
  drawer: {
    backgroundColor: Colors.facebook
  },
  main: {
    backgroundColor: Colors.facebook
  }
}

export default connect()(NavigationDrawer)
