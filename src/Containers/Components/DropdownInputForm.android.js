/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { InputLabel, InputPicker } from './'
import styles from '../../Styles/FormStyle'

export class DropdownInputForm extends Component {
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

DropdownInputForm.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  })
}

export default DropdownInputForm
