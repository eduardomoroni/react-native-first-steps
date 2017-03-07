/* @flow */

import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { Colors } from '../Styles/Themes'

export default class MainScreen extends Component {
  render () {
    return (
      <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  }
})
