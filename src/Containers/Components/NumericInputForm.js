/* @flow */

import React, { Component, PropTypes } from 'react'
import {
  TextInput,
  Text,
  View
} from 'react-native'
import { InputPicker } from './'
import I18n from 'react-native-i18n'
import styles from '../../Styles/FormStyle'

// TODO: This field has issues on changing Operator dropdown
// Take a look into selectedValue drop on Picker component
export class NumericInputForm extends Component {
  static propTypes = {
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render () {
    const { dropdownItems } = this.props
    const { onChange, name } = this.props.input
    let { value } = this.props.input
    value = value || {number: 0, operator: ''}

    const changeNumber = (newValue) => {
      const newInput = {
        number: parseInt(newValue),
        operator: value.operator
      }
      onChange(newInput)
    }

    const changeOperator = (newValue, index) => {
      const newInput = {
        number: value.number,
        operator: newValue
      }
      onChange(newInput)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text} >
          {`${I18n.t(name)} ${value.operator}`}
        </Text>
        <InputPicker
          selectedValue={value.operator}
          onValueChange={changeOperator}
          dropdownItems={dropdownItems}
        />
        <TextInput
          ref='TextInput'
          style={styles.input}
          onChangeText={changeNumber}
          underlineColorAndroid='transparent'
          keyboardType={'numeric'}
          maxLength={2}
          returnKeyType='next'
        />
      </View>
    )
  }
}
