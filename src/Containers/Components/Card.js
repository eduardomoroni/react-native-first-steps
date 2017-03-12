/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  Metrics,
  Fonts
} from '../../Styles/Themes'
import { manaCostToSymbol } from '../../Transform/ManaCostToSymbol'

type CardProps = {
  card: any
}

export default class Card extends Component {
  props: CardProps
  render () {
    const {
      name,
      text,
      manaCost,
      type,
      power,
      toughness
    } = this.props.card

    return (
      <View style={styles.container}>
        {renderCardNameAndMana(name, manaCostToSymbol(manaCost))}
        {renderCardTypeAndEdition(type, 'AER')}
        {renderTextAndPower(text, power, toughness)}
      </View>
    )
  }
}

const renderCardNameAndMana = (leftText, rightText) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.leftWord}>
        <Text style={styles.cardNameText}>{leftText}</Text>
      </View>
      <View style={styles.rightWord}>
        <Text style={styles.mana}>{rightText}</Text>
      </View>
    </View>
  )
}

const renderCardTypeAndEdition = (leftText, rightText) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.leftWord}>
        <Text style={styles.cardTypeText}>{leftText}</Text>
      </View>
      <View style={styles.rightWord}>
        <Text>{rightText}</Text>
      </View>
    </View>
  )
}

const renderTextAndPower = (text, power, toughness) => {
  return (
    <View style={styles.cardTextContainer}>
      <View style={styles.cardText}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.cardPower}>
        <Text style={styles.cardPowerToughness}>{power || toughness ? `${power}/${toughness}` : ''}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Metrics.baseMargin,
    flex: 1
  },
  text: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small
  },
  cardPowerToughness: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular
  },
  cardNameText: {
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.regular
  },
  cardTypeText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium
  },
  mana: {
    fontFamily: Fonts.type.mana
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardTextContainer: {
    flexDirection: 'row'
  },
  cardText: {
    flex: 1,
    paddingTop: 6,
    flexDirection: 'row'
  },
  cardPower: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
  }
})
