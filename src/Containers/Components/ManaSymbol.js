/* @flow */

import React, { PureComponent } from 'react'
import Mana from '../../Assets/Mana'
import { Image, StyleSheet } from 'react-native'

export const ValidColors = ['black', 'blue', 'green', 'red', 'white']

export class ManaSymbol extends PureComponent {
  static propTypes = {
    style: React.PropTypes.instanceOf(StyleSheet),
    color: React.PropTypes.oneOf(ValidColors)
  }

  render () {
    return <Image style={this.props.style} source={Mana[this.props.color]} />
  }
}
