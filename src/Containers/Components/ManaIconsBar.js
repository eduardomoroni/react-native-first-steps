/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Styles from '../../Styles/FormStyle'
import { ManaSymbol, ValidColors } from './ManaSymbol'
import { InputLabel } from './'
import _ from 'lodash'
import { View, TouchableOpacity } from 'react-native'

export class ManaIconsBar extends PureComponent {
  renderManaSymbol = (color: string) => {
    const { onChange, value } = this.props.input
    const selectedColors = value
    const isSelected = selectedColors.includes(color)
    const toggleColor = (color) => { onChange(_.xor(selectedColors, [color])) }

    return (
      <TouchableOpacity key={color} onPressOut={() => toggleColor(color)} >
        <ManaSymbol color={color} style={[Styles.manaIcon, {opacity: isSelected ? 1 : 0.25}]} />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={Styles.container}>
        <InputLabel label={this.props.input.name} />
        { ValidColors.map(this.renderManaSymbol) }
      </View>
    )
  }
}

ManaIconsBar.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.string), PropTypes.string).isRequired,
    name: PropTypes.string.isRequired
  })
}
