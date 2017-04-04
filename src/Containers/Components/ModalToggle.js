/* @flow */

import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import { InputLabel } from './'
import styles from '../../Styles/FormStyle'

export class ModalToggle extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { label, onPress, selected } = this.props
    console.log(selected)
    let bg = {backgroundColor: 'transparent'}
    if (selected !== undefined && selected.length > 0) {
      bg = {backgroundColor: 'cornsilk'}
    }

    return (
      <TouchableOpacity style={[styles.container, styles._centered, bg]} onPress={() => onPress(label)} >
        <InputLabel label={label} />
      </TouchableOpacity>
    )
  }
}
