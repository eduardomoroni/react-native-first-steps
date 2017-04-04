/* @flow */

import React, { Component } from 'react'
import { View } from 'react-native'
import { InputLabel, InputPicker } from './'
import styles from '../../Styles/FormStyle'

export default class DropdownInputForm extends Component {
  render () {
    const { input, dropdownItems, selectedValue } = this.props
    const { onChange, name } = input

    return (
      <View style={styles.container}>
        <InputLabel label={name} />
        <InputPicker
          selectedValue={selectedValue}
          onValueChange={onChange}
          dropdownItems={dropdownItems}
        />
      </View>
    )
  }
}
