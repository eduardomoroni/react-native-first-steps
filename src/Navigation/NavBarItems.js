/* @flow */

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Colors, Metrics } from '../Styles/Themes/'
import Icon from 'react-native-vector-icons/FontAwesome'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

// We should export this
const styles = StyleSheet.create({
  backButton: {
    ...navButton
  }
})

type ButtonPropsType = {
  name: string,
  size: number,
  color: string,
  style: any
}

const defaultButtonProps: ButtonPropsType = {
  name: 'question',
  size: Metrics.icons.medium,
  color: Colors.snow,
  style: styles.backButton
}

export default {
  navButton (buttonProps: ButtonPropsType, callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon {...defaultButtonProps} {...buttonProps} />
      </TouchableOpacity>
    )
  }
}
