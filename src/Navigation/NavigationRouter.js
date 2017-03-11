// @flow

import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Settings from '../Containers/Settings'
import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import Styles from '../Styles/NavigationRouterStyle'
import Drawer from './NavigationDrawer'
import CardSearchForm from '../Containers/CardSearchForm'
import ListCards from '../Containers/ListCards'
import I18n from 'react-native-i18n'

const NavigationRouter = () => {
  return (
    <Router>
      <Scene key='drawer' component={Drawer} open={false} >
        <Scene key='drawerChildrenWrapper'
          navigationBarStyle={Styles.navBar}
          titleStyle={Styles.title}
          leftButtonIconStyle={Styles.leftButton}
          rightButtonTextStyle={Styles.rightButton}
        >
          <Scene key='MainScreen' component={MainScreen} title={I18n.t('welcome')} />
          <Scene initial key='CardSearchForm' component={CardSearchForm} title={I18n.t('card_search_form_title')} />
          <Scene key='settings' component={Settings} title={I18n.t('settings')} />
          <Scene key='listCards' component={ListCards} title={I18n.t('list_cards_title')} />
          <Scene key='loginScreen' component={LoginScreen} title={I18n.t('login_for_title')} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  )
}

export default NavigationRouter
