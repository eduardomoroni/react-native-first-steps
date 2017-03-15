/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
  Metrics,
  Fonts,
  Colors
} from '../../Styles/Themes'
import { placeholdersToSymbols } from '../../Transform/PlaceholderToSymbol'
import { Actions as NavigationActions } from 'react-native-router-flux'

type CardProps = {
  card: any
}

export default class Card extends Component {
  props: CardProps
  render () {
    const { card } = this.props
    const {
      name,
      text,
      manaCost,
      type,
      power,
      toughness
    } = card

    return (
      <TouchableOpacity onPress={() => showDetails(card)} >
        <View style={styles.container}>
          {renderCardNameAndMana(name, placeholdersToSymbols(manaCost))}
          {renderCardTypeAndEdition(type, 'AER')}
          {renderTextAndPower(text, power, toughness)}
        </View>
      </TouchableOpacity>
    )
  }
}

const showDetails = (card) => {
  console.log(JSON.stringify(card))
  NavigationActions.cardDetails({card: card, title: card.name})
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
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardPowerToughness: {
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardNameText: {
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardTypeText: {
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.medium,
    color: Colors.black
  },
  mana: {
    fontFamily: Fonts.type.mtg,
    color: Colors.black,
    fontSize: Fonts.size.small
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
