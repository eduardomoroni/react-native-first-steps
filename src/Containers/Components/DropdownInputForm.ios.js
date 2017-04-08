/* @flow */

import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { InputLabel } from './'
import styles from '../../Styles/FormStyle'

// WIP
export class DropdownInputForm extends Component {
  render () {
    const { onChange, name } = this.props.input

    return (
      <View style={styles.container}>
        <InputLabel label={name} />
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

export default DropdownInputForm
