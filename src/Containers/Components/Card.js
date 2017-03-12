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

const renderLine = (leftText, rightText) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.leftWord}>
        <Text >{leftText}</Text>
      </View>
      <View style={styles.rightWord}>
        <Text >{rightText}</Text>
      </View>
    </View>
  )
}

const renderTextAndPower = (text, power) => {
  return (
    <View style={styles.cardTextContainer}>
      <View style={styles.cardText}>
        <Text >{text}</Text>
      </View>
      <View style={styles.cardPower}>
        <Text >{power}</Text>
      </View>
    </View>
  )
}

export default class Card extends Component {
  props: CardProps
  render () {
    const {
      name,
      text,
      manaCost,
      type
    } = this.props.card
    return (
      <View style={styles.container}>
        {renderLine(name, manaCost)}
        {renderLine(type, 'AER')}
        {renderTextAndPower(text, '5/5')}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftWord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightWord: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardTextContainer: {
    paddingTop: 6,
    flexDirection: 'row'
  },
  cardText: {
    flex: 1,
    flexDirection: 'row'
  },
  cardPower: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
  }
})
