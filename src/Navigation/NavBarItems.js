/* @flow */

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import { Colors, Metrics } from '../Styles/Themes/'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { navButtonColor, builtInBarStyle, customBarStyle } from '../Styles/NavBarStyle'

type ButtonPropsType = {
  name: string,
  size: number,
  color: string,
  style: any
}
// TODO: TEST THIS!
// TODO: REFACTOR TYPES
export function navButton (buttonProps: ButtonPropsType, callback: Function, key: any) {
  return (
    <TouchableOpacity onPress={callback} key={key} >
      <Icon {...defaultButtonProps} {...buttonProps} />
    </TouchableOpacity>
  )
}

export function navTitle (title: string) {
  return (
    <Text style={builtInBarStyle.titleStyle}>
      {title}
    </Text>
  )
}

// TODO: This is an array of Object ButtonPropsType
export function navButtonBar (buttons: any) {
  return (
    <View style={[customBarStyle.rightButton, customBarStyle.buttons]} >
      { buttons.map(i => navButton(i.buttonProps, i.callback, i.buttonProps.name)) }
    </View>
  )
}

export const backButton = () => {
  return navButton({name: 'angle-left'}, NavigationActions.pop)
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.transparent,
    color: navButtonColor,
    justifyContent: 'center',
    marginLeft: Metrics.smallMargin
  }
})

const defaultButtonProps: ButtonPropsType = {
  name: 'heart',
  size: Metrics.icons.medium,
  color: Colors.snow,
  style: styles.button
}
