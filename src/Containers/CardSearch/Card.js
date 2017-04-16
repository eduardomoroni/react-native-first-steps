/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import {
  View,
  Text
} from 'react-native'
import styles from '../../Styles/CardStyle'
import { placeholdersToSymbols } from '../../Realm/Conversion/Placeholder'

type CardProps = {
  card: any,
  showCardText: boolean
}

class Card extends PureComponent {
  props: CardProps

  render () {
    const { card, showCardText } = this.props
    const {
      name,
      text,
      manaCost,
      type,
      power,
      toughness
    } = card

    return (
      <View style={styles.container}>
        {renderCardNameAndMana(name, placeholdersToSymbols(manaCost))}
        {renderCardTypeAndEdition(type, 'AER')}
        {renderTextAndPower(text, power, toughness, showCardText)}
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

const renderTextAndPower = (text, power, toughness, showCardText) => {
  return (
    <View style={styles.cardTextContainer}>
      <View style={styles.cardText}>
        <Text style={styles.text}>{showCardText ? text : ''}</Text>
      </View>
      <View style={styles.cardPower}>
        <Text style={styles.cardPowerToughness}>{power || toughness ? `${power}/${toughness}` : ''}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    showCardText: selector(state, 'showCardText')
  }
}

export default connect(mapStateToProps)(Card)
