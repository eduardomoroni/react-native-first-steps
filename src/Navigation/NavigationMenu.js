// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Styles/Themes'
import { userLoggout } from '../Redux/Actions'
import { DrawerButton } from '../Containers/Components'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import type { Dispatch } from 'redux'

class NavigationMenu extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePress = (route: string) => {
    this.toggleDrawer()
    NavigationActions[route]()
  }

  renderLoginOrLogout = () => {
    if (this.props.user === null) {
      return (
        <DrawerButton text={I18n.t('login')} onPress={() => this.handlePress('loginScreen')} />
      )
    } else {
      return (
        <DrawerButton text={I18n.t('logout')} onPress={() => this.props.onLogout()} />
      )
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text={I18n.t('cardSearch')} onPress={() => this.handlePress('cardSearchForm')} />
        <DrawerButton text={I18n.t('wishList')} onPress={() => this.handlePress('wishList')} />
        <DrawerButton text={I18n.t('settings')} onPress={() => this.handlePress('settings')} />
        {this.renderLoginOrLogout()}
      </ScrollView>
    )
  }
}

NavigationMenu.contextTypes = {
  drawer: PropTypes.object
}

NavigationMenu.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func
}

const mapStateToProps = (state) => {
  const { token } = state.auth

  return {
    user: token
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onLogout: () => dispatch(userLoggout())
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20
  },
  logo: {
    alignSelf: 'center'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)
