/* @flow */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from '../../Styles/CardStyle'
import { placeholdersToSymbols } from '../../Realm/Conversion/Placeholder'
import { Actions as NavigationActions } from 'react-native-router-flux'

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
      <TouchableOpacity onPress={() => showDetails(card)} >
        <View style={styles.container}>
          {renderCardNameAndMana(name, placeholdersToSymbols(manaCost))}
          {renderCardTypeAndEdition(type, 'AER')}
          {renderTextAndPower(text, power, toughness, showCardText)}
        </View>
      </TouchableOpacity>
    )
  }
}

const showDetails = (card) => {
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
  return {
    showCardText: state.cardSearch.showCardText
  }
}

export default connect(mapStateToProps)(Card)
