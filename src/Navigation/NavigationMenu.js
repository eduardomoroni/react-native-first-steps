// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Styles/Themes'
import { userLoggout } from '../Redux/Actions'
import { DrawerButton } from '../Containers/Components'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

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
    switch (route) {
      case 'settings':
        NavigationActions.settings()
        break
      case 'cardSearch':
        NavigationActions.cardSearch()
        break
      case 'loginScreen':
        NavigationActions.loginScreen()
        break
      case 'cardSearchForm':
        NavigationActions.cardSearchForm()
        break
    }
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
        <DrawerButton text={I18n.t('settings')} onPress={() => this.handlePress('settings')} />
        <DrawerButton text={I18n.t('cardSearch')} onPress={() => this.handlePress('cardSearchForm')} />
        {this.renderLoginOrLogout()}
      </ScrollView>
    )
  }
}

NavigationMenu.contextTypes = {
  drawer: React.PropTypes.object
}

NavigationMenu.propTypes = {
  user: React.PropTypes.object,
  onLogout: React.PropTypes.func
}

const mapStateToProps = (state) => {
  const { user } = state.user

  return {
    user: user
  }
}

const mapDispatchToProps = (dispatch) => {
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
