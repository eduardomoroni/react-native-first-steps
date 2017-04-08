/* @flow */

import React, { PureComponent, PropTypes } from 'react'
import Mana from '../../Assets/Mana'
import { Image } from 'react-native'

export const ValidColors = ['black', 'blue', 'green', 'red', 'white']

export class ManaSymbol extends PureComponent {
  static propTypes = {
    style: PropTypes.arrayOf(PropTypes.object),
    color: PropTypes.oneOf(ValidColors).isRequired
  }

  render () {
    return <Image style={this.props.style} source={Mana[this.props.color]} />
  }
}
