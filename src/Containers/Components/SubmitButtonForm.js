/* @flow */

import React, { PureComponent } from 'react'
import I18n from 'react-native-i18n'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../Styles/FormStyle'

export class SubmitButtonForm extends PureComponent {
  render () {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress} >
        <Text style={styles.buttonText}>{I18n.t('search')}</Text>
      </TouchableOpacity>
    )
  }
}
