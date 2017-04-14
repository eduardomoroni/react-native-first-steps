/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Mana from '../../Assets/Mana'
import { Image } from 'react-native'

export const ValidColors = ['black', 'blue', 'green', 'red', 'white']

export class ManaSymbol extends PureComponent {
  render () {
    return <Image style={this.props.style} source={Mana[this.props.color]} />
  }
}

ManaSymbol.propTypes = {
  style: PropTypes.arrayOf(PropTypes.any), // IDK why styles are imported as number
  color: PropTypes.oneOf(ValidColors).isRequired
}
