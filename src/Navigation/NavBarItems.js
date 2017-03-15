/* @flow */

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Colors, Metrics } from '../Styles/Themes/'
import Icon from 'react-native-vector-icons/FontAwesome'
import { navButtonColor } from '../Styles/NavBarStyle'

type ButtonPropsType = {
  name: string,
  size: number,
  color: string,
  style: any
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.transparent,
    color: navButtonColor,
    justifyContent: 'center'
  }
})

const defaultButtonProps: ButtonPropsType = {
  name: 'heart',
  size: Metrics.icons.medium,
  color: Colors.snow,
  style: styles.button
}
