// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import NavigationRouter from '../modules/navigation/NavigationRouter'
import { createMtgxStore, initialConfig } from './configuration/index'

const store = createMtgxStore()

class MTGX extends Component {
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

export default MTGX
