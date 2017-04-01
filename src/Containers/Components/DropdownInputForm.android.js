/* @flow */

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import {
  View,
  Text,
  Picker
} from 'react-native'
import styles from '../../Styles/FormStyle'

export default class DropdownInputForm extends Component {
  render () {
    const { input, dropdownItems, selectedValue } = this.props
    const { onChange, name } = input

    const renderPickerItem = (value, key) => {
      return <Picker.Item label={value} value={value} key={key} />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {I18n.t(name)}
        </Text>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedValue}
          onValueChange={onChange}>
          { dropdownItems.map(renderPickerItem) }
        </Picker>
      </View>
    )
  }
}
