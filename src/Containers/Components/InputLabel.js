import React, { PureComponent, PropTypes } from 'react'
import styles from '../../Styles/FormStyle'
import I18n from 'react-native-i18n'
import { Text } from 'react-native'

export class InputLabel extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func
  }

  static defaultProps = {
    onPress: () => null
  }

  render () {
    const { label, onPress } = this.props
    return (
      <Text style={styles.text} onPress={onPress}>
        {I18n.t(label)}
      </Text>
    )
  }
}
