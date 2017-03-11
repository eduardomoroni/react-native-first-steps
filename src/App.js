// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import NavigationRouter from './Navigation/NavigationRouter'
import setupMtgxConfigs, { createMtgxStore } from './Config'

const store = createMtgxStore()

class App extends Component {
  componentWillMount () {
    setupMtgxConfigs()
  }

  render () {
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default App
