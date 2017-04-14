/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import styles from '../../Styles/FormStyle'
import { InputLabel } from './'

export class TextInputForm extends PureComponent {
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

TextInputForm.propTypes = {
  keyboardType: TextInput.propTypes.keyboardType,
  maxLength: TextInput.propTypes.maxLength,
  input: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  })
}

// TextInputForm.defaultProps = {
//   keyboardType: 'default',
//   maxLength: 100
// }
