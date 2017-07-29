// @flow
// TODO: TEST THIS

import React, { PureComponent } from 'react'
import { Switch, View } from 'react-native'
import styles from '../../theme/FormStyle'
import { InputLabel } from './index'

export class SwitchInputForm extends PureComponent {
  render () {
    const { onChange, name, value } = this.props.input

    return (
      <View style={styles.container}>
        <InputLabel label={name} onPress={() => { this.refs.TextInput.focus() }} />
        <Switch value={value} onValueChange={onChange} />
      </View>
    )
  }
}
