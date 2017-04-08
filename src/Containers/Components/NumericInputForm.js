/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  changeNumber = (newValue: string) => {
    const { onChange, value } = this.props.input

    const newInput = {
      number: parseInt(newValue),
      operator: value.operator
    }

    onChange(newInput)
  }

  changeOperator = (newValue: string, index: string) => {
    const { onChange, value } = this.props.input

    const newInput = {
      number: value.number,
      operator: newValue
    }

    onChange(newInput)
  }

  render () {
    const { dropdownItems } = this.props
    const { name } = this.props.input
    let { value } = this.props.input
    value = value || {number: 0, operator: ''}

    return (
      <View style={styles.container}>
        <Text style={styles.text} >
          {`${I18n.t(name)} ${value.operator}`}
        </Text>
        <InputPicker
          selectedValue={value.operator}
          onValueChange={this.changeOperator}
          dropdownItems={dropdownItems}
        />
        <TextInput
          ref='TextInput'
          style={styles.input}
          onChangeText={this.changeNumber}
          underlineColorAndroid='transparent'
          keyboardType={'numeric'}
          maxLength={2}
          returnKeyType='next'
        />
      </View>
    )
  }
}

NumericInputForm.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
}
