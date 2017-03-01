// @flow

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/SettingsStyle'

export default class Settings extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Settings
        </Text>
      </View>
    )
  }
}
