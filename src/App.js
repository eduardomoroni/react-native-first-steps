// @flow

import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import './I18n/I18n'
import Firebase from 'firebase'
import NavigationRouter from './Navigation/NavigationRouter'
import reducers from './Redux/Reducers'
import sagas from './Sagas'

class App extends Component {
  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyBfkEhUvDMHM6Hc_6r7ZExsFzdM74MoU4o',
      authDomain: 'react-native-playground-1bf22.firebaseapp.com',
      databaseURL: 'https://react-native-playground-1bf22.firebaseio.com',
      storageBucket: 'react-native-playground-1bf22.appspot.com',
      messagingSenderId: '1074542852729'
    }

    Firebase.initializeApp(config)
  }

  render () {
    const middleware = []
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)
    const store = createStore(reducers, {}, applyMiddleware(...middleware))

    sagaMiddleware.run(sagas)

    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default App
