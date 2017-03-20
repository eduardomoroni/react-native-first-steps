/* @flow */

import React from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import I18n from 'react-native-i18n'
import { Metrics, Colors } from '../../Styles/Themes'

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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Metrics.marginHorizontal,
    marginBottom: Metrics.smallMargin,
    height: Metrics.inputHeight,
    borderColor: Colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  text: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: Metrics.smallMargin
  }
})
