/* @flow */

import React, { Component } from 'react'
import Styles from '../../Styles/FormStyle'
import { ManaSymbol, ValidColors } from './ManaSymbol'
import { InputLabel } from './'
import _ from 'lodash'
import { View, TouchableOpacity } from 'react-native'

export class ManaIconsBar extends Component {
  render () {
    const { onChange, value, name } = this.props.input
    const selectedColors = value // redux-form value prop seems odd, just an alias

    const toggleColor = (color) => { onChange(_.xor(selectedColors, [color])) }

    const renderManaSymbol = (color) => {
      const isSelected = selectedColors.includes(color)

      return (
        <TouchableOpacity key={color} onPressOut={() => toggleColor(color)} >
          <ManaSymbol color={color} style={[Styles.manaIcon, {opacity: isSelected ? 1 : 0.25}]} />
        </TouchableOpacity>
      )
    }

    return (
      <View style={Styles.container}>
        <InputLabel label={name} />
        { ValidColors.map(renderManaSymbol) }
      </View>
    )
  }
}
