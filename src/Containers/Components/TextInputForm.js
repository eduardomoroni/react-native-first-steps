/* @flow */

import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../../Styles/FormStyle'
import { InputLabel } from './'

export class TextInputForm extends React.Component {
  render () {
    const { onChange, name } = this.props.input
    const { keyboardType, maxLength } = this.props

    return (
      <View style={styles.container}>
        <InputLabel label={name} onPress={() => { this.refs.TextInput.focus() }} />
        <TextInput
          ref='TextInput'
          style={styles.input}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize='characters'
          underlineColorAndroid='transparent'
          returnKeyType='next'
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
    )
  }
}
