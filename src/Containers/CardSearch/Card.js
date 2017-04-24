/* @flow */

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/CardStyle'
import { placeholdersToSymbols } from '../../Realm/Conversion/Placeholder'

// TODO: Make this component a dumb component
// TODO: Use prop-types
type CardProps = {
  card: any,
  showCardText: boolean
}

export const getLastPrinting = (printings: any) => {
  const keys = Object.keys(printings)
  const lastPrinting = printings[keys[keys.length - 1]]
  return lastPrinting.printing
}

export class Card extends PureComponent {
  props: CardProps

  render () {
    const { card, showCardText } = this.props
    const {
      name,
      text,
      manaCost,
      type,
      power,
      toughness,
      printings
    } = card
    return (
      <View style={styles.container}>
        {renderCardNameAndMana(name, placeholdersToSymbols(manaCost))}
        {renderCardTypeAndEdition(type, getLastPrinting(printings))}
        {renderTextAndPower(text, power, toughness, showCardText)}
      </View>
    )
  }
}

const renderCardNameAndMana = (leftText, rightText) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.leftWord}>
        <Text key='cardName' style={styles.cardNameText}>{leftText}</Text>
      </View>
      <View style={styles.rightWord}>
        <Text key='cardManaCost' style={styles.mana}>{rightText}</Text>
      </View>
    </View>
  )
}

const renderCardTypeAndEdition = (leftText, rightText) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.leftWord}>
        <Text key='cardType' style={styles.cardTypeText}>{leftText}</Text>
      </View>
      <View style={styles.rightWord}>
        <Text key='cardEdition'>{rightText}</Text>
      </View>
    </View>
  )
}

const renderTextAndPower = (text, power, toughness, showCardText) => {
  return (
    <View style={styles.cardTextContainer}>
      <View style={styles.cardText}>
        <Text key='cardText' style={styles.text}>{showCardText ? text : ''}</Text>
      </View>
      <View style={styles.cardPower}>
        <Text key='cardPowerAndToughness' style={styles.cardPowerToughness}>{power || toughness ? `${power}/${toughness}` : ''}</Text>
      </View>
    </View>
  )
}
