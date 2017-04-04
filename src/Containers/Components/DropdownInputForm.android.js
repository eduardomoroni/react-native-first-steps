/* @flow */

import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { InputLabel, InputPicker } from './'
import styles from '../../Styles/FormStyle'

export default class DropdownInputForm extends Component {
  static propTypes = {
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedValue: PropTypes.string,
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    })
  }

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
