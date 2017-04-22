import React from 'react'
import { View, StyleSheet } from 'react-native'
import { builtInBarStyle, customBarStyle } from '../Styles/NavBarStyle'

export class CustomNavBar extends React.Component {
  render () {
    const { leftRender, middleRender, rightRender } = this.props

    return (
      <View style={StyleSheet.flatten([customBarStyle.container, builtInBarStyle.navigationBarStyle])}>
        <View style={StyleSheet.flatten([customBarStyle.leftButton, customBarStyle.buttons])}>
          {leftRender}
        </View>
        <View>
          {middleRender}
        </View>
        <View style={StyleSheet.flatten([customBarStyle.rightButton, customBarStyle.buttons])}>
          {rightRender}
        </View>
      </View>
    )
  }
}

export default CustomNavBar
