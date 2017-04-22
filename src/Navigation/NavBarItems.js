/* @flow */

import React from 'react'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Metrics } from '../Styles/Themes/'
import styles from '../Styles/Navigation/NavBarItemsStyle'
import { builtInBarStyle, customBarStyle } from '../Styles/NavBarStyle'

type ButtonPropsType = {
  name: string,
  size: number,
  style: any
}

// TODO: TEST THIS!
// TODO: REFACTOR TYPES
export const navButton = (buttonProps: any, callback: Function, key: any) => {
  return (
    <TouchableOpacity onPress={callback} key={key} >
      <Icon {...defaultButtonProps} {...buttonProps} />
    </TouchableOpacity>
  )
}

export const openDrawer = (component: any) => {
  NavigationActions.refresh({
    key: 'drawer',
    content: component,
    open: true,
    side: 'left'
  })
}

export const navTitle = (title: string) => {
  return (
    <Text style={builtInBarStyle.titleStyle}>
      {I18n.t(title)}
    </Text>
  )
}

// TODO: This is an array of Object ButtonPropsType
export const navButtonBar = (buttons: any) => {
  return (
    <View style={[customBarStyle.rightButton, customBarStyle.buttons]} >
      { buttons.map(i => navButton(i.buttonProps, i.callback, i.buttonProps.name)) }
    </View>
  )
}

export const navBackButton = () => {
  return navButton({name: 'angle-left'}, NavigationActions.pop)
}

const defaultButtonProps: ButtonPropsType = {
  name: 'heart',
  size: Metrics.icons.medium,
  style: styles.button
}
