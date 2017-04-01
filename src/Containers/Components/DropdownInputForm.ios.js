/* @flow */

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import {
  View,
  Text,
  TextInput
} from 'react-native'
import styles from '../../Styles/FormStyle'

// WIP
export default class DropdownInputForm extends Component {
  render () {
    const { onChange, name } = this.props.input

    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => { this.refs.TextInput.focus() }}>
          {I18n.t(name)}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize='characters'
        />
      </View>
    )
  }
}
