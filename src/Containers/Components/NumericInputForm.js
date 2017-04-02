/* @flow */

import React from 'react'
import {
  TextInput,
  Text,
  View,
  Picker
} from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../Styles/FormStyle'

// TODO: This field has issues on changing Operator dropdown
// Take a look into selectedValue drop on Picker component
export default class NumericInputForm extends React.Component {
  render () {
    const { onChange, name } = this.props.input
    let { value } = this.props.input
    const dropdownItems = ['=', '>', '>=', '<', '<=']
    value = value || {number: 0, operator: '='}
    const renderPickerItem = (value, key) => {
      return <Picker.Item label={value} value={value} key={value} />
    }

    const changeNumber = (newValue) => {
      const newInput = {
        number: parseInt(newValue),
        operator: value.operator
      }
      onChange(newInput)
    }
    const changeOperator = (newValue) => {
      const newInput = {
        number: value.number,
        operator: newValue
      }
      onChange(newInput)
      this.refs.TextInput.focus()
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => { this.refs.TextInput.focus() }}>
          {`${I18n.t(name)} ${value.operator || '='}`}
        </Text>
        <Picker
          style={styles.dropdown}
          selectedValue={value.operator || '='}
          onValueChange={changeOperator}>
          { dropdownItems.map(renderPickerItem) }
        </Picker>
        <TextInput
          ref='TextInput'
          style={styles.input}
          onChangeText={changeNumber}
          underlineColorAndroid='transparent'
          keyboardType={'numeric'}
          returnKeyType='next'
          maxLength={2}
        />
      </View>
    )
  }
}
