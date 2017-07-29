// @flow

import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Settings from '../containers/settings/Settings'
import LoginScreen from '../containers/login/LoginScreen'
import MainScreen from '../containers/MainScreen'
import Drawer, { menuDrawerProps } from './NavigationDrawer'
import CardSearchForm from '../containers/cardSearch/CardSearchForm'
import ListCards from '../containers/cardSearch/ListCards'
import CardDetails from '../containers/cardSearch/CardDetails'
import CardSwiper from '../containers/cardSearch/CardSwiper'
import WishList from '../containers/cardTrade/WishList'
import SearchResultsNavBar from '../containers/cardSearch/SearchResultsNavBar'
import I18n from 'react-native-i18n'
import { findCardsFromForm } from '../services/CardService'
import { builtInBarStyle } from '../styles/NavBarStyle'

const testForm = {
  cardName: 'aetASDASDASD'
}

const testScreen = () => {
  const cards = findCardsFromForm(testForm)
  console.log(cards)
  return <WishList />
}

const NavigationRouter = () => {
  return (
    <Router>
      <Scene key='drawer' component={Drawer} {...menuDrawerProps} >
        <Scene key='drawerChildrenWrapper' {...builtInBarStyle} >
          <Scene key='cardSearchForm' component={CardSearchForm} title={I18n.t('card_search_form_title')} />
          <Scene key='cardDetails' component={CardDetails} />
          <Scene key='cardSwiper' component={CardSwiper} />
          <Scene key='wishList' component={WishList} />
          <Scene initial key='testScreen' component={testScreen} title='Test Screen' />
          <Scene key='mainScreen' component={MainScreen} title={I18n.t('welcome')} />
          <Scene key='settings' component={Settings} title={I18n.t('settings')} />
          <Scene key='listCards' component={ListCards} title={I18n.t('list_cards_title')} navBar={SearchResultsNavBar} />
          <Scene key='loginScreen' component={LoginScreen} title={I18n.t('login_for_title')} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  )
}

export default NavigationRouter
