/* @flow */

import React, { Component } from 'react'
import Styles from '../../Styles/FormStyle'
import ManaSymbol, { ValidColors } from './ManaSymbol'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class ManaIconsBar extends Component {
  render () {
    const renderManaSymbol = (color) => {
      return (
        <TouchableOpacity key={color} >
          <ManaSymbol style={Styles.manaIcon} color={color} />
        </TouchableOpacity>
      )
    }

    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>
          Cor:
        </Text>
        { ValidColors.map(renderManaSymbol) }
      </View>
    )
  }
}
