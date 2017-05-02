// @flow

import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Settings from '../Containers/Settings/Settings'
import LoginScreen from '../Containers/Login/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import Drawer, { menuDrawerProps } from './NavigationDrawer'
import CardSearchForm from '../Containers/CardSearch/CardSearchForm'
import ListCards from '../Containers/CardSearch/ListCards'
import CardDetails from '../Containers/CardSearch/CardDetails'
import CardSwiper from '../Containers/CardSearch/CardSwiper'
import WishList from '../Containers/CardTrade/WishList'
import SearchResultsNavBar from '../Containers/CardSearch/SearchResultsNavBar'
import I18n from 'react-native-i18n'
import { findCardsFromForm } from '../Services/CardService'
import { builtInBarStyle } from '../Styles/NavBarStyle'

const testForm = {
  cardName: 'aetASDASDASD'
}

const testScreen = () => {
  const cards = findCardsFromForm(testForm)
  console.log(cards)
  // return <WishList />
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
