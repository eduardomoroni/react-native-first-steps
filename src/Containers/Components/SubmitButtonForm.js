/* @flow */

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from '../../Styles/FormStyle'

export class SubmitButtonForm extends Component {
  render () {
    const { onPress } = this.props

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} >
          <Text style={styles.buttonText}>{I18n.t('search')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
