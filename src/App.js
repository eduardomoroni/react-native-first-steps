// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import NavigationRouter from './Navigation/NavigationRouter'
import { createMtgxStore, initialConfig } from './Config'

const store = createMtgxStore()

class App extends Component {
  componentWillMount () {
    initialConfig()
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
