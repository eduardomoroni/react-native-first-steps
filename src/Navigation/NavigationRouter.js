// @flow

import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Settings from '../Containers/Settings'
import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import Drawer from './NavigationDrawer'
import CardSearchForm from '../Containers/CardSearchForm'
import ListCards from '../Containers/ListCards'
import CardDetails from '../Containers/CardDetails'
import CustomNavBar from './CustomNavBar'
import I18n from 'react-native-i18n'
import { findCards } from '../Realm/RealmService'

const testScreen = () => {
  return <ListCards cardsTest={findCards('name CONTAINS[c] $0', 'aer').slice(0, 15)} />
}

const NavigationRouter = () => {
  return (
    <Router>
      <Scene key='drawer' component={Drawer} open={false} >
        <Scene key='drawerChildrenWrapper'>
          <Scene key='cardDetails' component={CardDetails} />
          <Scene initial key='testScreen' component={testScreen} title='Test Screen' navBar={CustomNavBar} />
          <Scene key='cainScreen' component={MainScreen} title={I18n.t('welcome')} />
          <Scene key='cardSearchForm' component={CardSearchForm} title={I18n.t('card_search_form_title')} />
          <Scene key='settings' component={Settings} title={I18n.t('settings')} />
          <Scene key='listCards' component={ListCards} title={I18n.t('list_cards_title')} />
          <Scene key='loginScreen' component={LoginScreen} title={I18n.t('login_for_title')} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  )
}

export default NavigationRouter
