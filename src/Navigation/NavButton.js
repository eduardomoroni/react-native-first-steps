import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Metrics } from '../Styles/Themes/'
import styles from '../Styles/Navigation/NavBarItemsStyle'

export class NavButton extends Component {
  render () {
    const {
      iconProps,
      callback
    } = this.props

    return (
      <TouchableOpacity onPress={callback} >
        <Icon {...iconProps} />
      </TouchableOpacity>
    )
  }
}

NavButton.propTypes = {
  iconProps: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.any
  }),
  callback: PropTypes.func
}

Icon.defaultProps = {
  name: 'heart',
  size: Metrics.icons.medium,
  style: styles.button
}
