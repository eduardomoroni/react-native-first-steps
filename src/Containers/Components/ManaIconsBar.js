/* @flow */

import React, { Component } from 'react'
import Styles from '../../Styles/FormStyle'
import ManaSymbol, { ValidColors } from './ManaSymbol'
import { connect } from 'react-redux'
import { change as changeFieldValue } from 'redux-form'
import I18n from 'react-native-i18n'
import _ from 'lodash'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class ManaIconsBar extends Component {
  render () {
    const { selectedColors, updateColors } = this.props

    function toggleColor (color) {
      let updatedSelect = []

      if (selectedColors.includes(color)) {
        updatedSelect = _.without(selectedColors, color)
      } else {
        updatedSelect = _.concat(selectedColors, color)
      }

      updateColors(updatedSelect)
    }

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
        <Text style={Styles.text}>
          {I18n.t('color')}
        </Text>
        { ValidColors.map(renderManaSymbol) }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateColors: (colors) => dispatch(changeFieldValue('CardSearchForm', 'cardColor', colors))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManaIconsBar)
