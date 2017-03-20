/* @flow */

import React from 'react'
import {
  TextInput,
  Text,
  View
} from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../../Styles/FormStyle'

export default class TextInputForm extends React.Component {
  render () {
    const { onChange, name } = this.props.input

    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => { this.refs.TextInput.focus() }}>
          {I18n.t(name)}
        </Text>
        <TextInput
          ref='TextInput'
          style={styles.input}
          placeholder={I18n.t(name)}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize='characters'
          underlineColorAndroid='transparent'
        />
      </View>
    )
  }
}
