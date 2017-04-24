import React from 'react'
import I18n from 'react-native-i18n'
import { Text, View } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { builtInBarStyle, customBarStyle } from '../Styles/NavBarStyle'
import { NavButton } from './NavButton'

type ButtonPropsType = {
  name: string,
  size: number,
  style: any
}

// TODO: Enable Flow
// TODO: REFACTOR TYPES
export const navButton = (buttonProps: ButtonPropsType, callback: Function, key: any) => {
  return (
    <NavButton iconProps={{...buttonProps}} callback={callback} key={key} />
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
