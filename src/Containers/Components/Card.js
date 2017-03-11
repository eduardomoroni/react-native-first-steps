/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

type CardProps = {
  card: any
}

export default class Card extends Component {
  props: CardProps
  render () {
    const {
      name,
      text
    } = this.props.card
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
