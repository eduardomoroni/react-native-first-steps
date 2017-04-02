/* @flow */

import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../Styles/FormStyle'

export default class ModalToggle extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { label, onPress } = this.props

    return (
      <TouchableOpacity style={[styles.container, styles._centered]} onPress={() => onPress(label)} >
        <Text style={styles.text}>
          {I18n.t(label)}
        </Text>
      </TouchableOpacity>
    )
  }
}