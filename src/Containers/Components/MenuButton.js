// @flow

import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

type DrawerButtonProps = {
  text: string,
  onPress: () => void
}

const DrawerButton = (props: DrawerButtonProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  text: {
    ...Fonts.style.h5,
    color: Colors.snow,
    marginVertical: Metrics.baseMargin
  }
})

export default DrawerButton
