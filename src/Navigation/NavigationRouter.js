// @flow

import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Settings from '../Containers/Settings'
import LoginScreen from '../Containers/LoginScreen'
import Styles from './Styles/NavigationRouterStyle'
import Drawer from './NavigationMenu'
import I18n from 'react-native-i18n'

const NavigationRouter = () => {
  return (
    <Router>
      <Scene key='drawer' component={Drawer} open={false} >
        <Scene initial key='root' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton} >
          <Scene key='settings' component={Settings} title={I18n.t('welcome')} />
          <Scene key='loginScreen' component={LoginScreen} title={I18n.t('login_for_title')} />
        </Scene>
      </Scene>
    </Router>
  )
}

export default NavigationRouter
