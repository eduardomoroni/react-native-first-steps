import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '../../Styles/FormStyle'
import I18n from 'react-native-i18n'
import { Text } from 'react-native'

export class InputLabel extends PureComponent {
  render () {
    const { label, onPress } = this.props
    return (
      <Text style={styles.text} onPress={onPress}>
        {I18n.t(label)}
      </Text>
    )
  }
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func
}

InputLabel.defaultProps = {
  onPress: () => null
}
