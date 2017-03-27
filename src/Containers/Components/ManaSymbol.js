/* @flow */

import React, { Component } from 'react'
import Mana from '../../Assets/Mana'
import { Image, StyleSheet } from 'react-native'

export const ValidColors = ['black', 'blue', 'green', 'red', 'white']

export default class ManaSymbol extends Component {
  render () {
    return <Image style={this.props.style} source={Mana[this.props.color]} />
  }
}

ManaSymbol.propTypes = {
  style: React.PropTypes.instanceOf(StyleSheet),
  color: React.PropTypes.oneOf(ValidColors)
}
