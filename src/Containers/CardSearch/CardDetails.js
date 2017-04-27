/* @flow */

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../../Styles/CardSearch/CardDetailsStyle'
import { CardImage } from '../Components'
import { cardType, rulingsType } from '../../Types/CardType'
import { rulingsTextAsArray } from '../../Realm/Conversion/RealmRepresentation'
import I18n from 'react-native-i18n'

export default class CardDetails extends Component {
  renderText (value: string, key: number) {
    return (
      <Text key={key} >{`
        - ${value}`
      }</Text>
    )
  }

  renderRulings (rulings: rulingsType) {
    const rulesText = rulingsTextAsArray(rulings)

    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>
          <Text style={styles.rowName}>{`${I18n.t('rulings')}: `}</Text>
          { rulesText.map(this.renderText) }
        </Text>
      </View>
    )
  }

  renderRow (rowName: string, rowText: string) {
    if (rowText === null) {
      return null
    }

    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>
          <Text style={styles.rowName}>{`${I18n.t(rowName)}: `}</Text>
          {rowText}
        </Text>
      </View>
    )
  }

  render () {
    const { card } = this.props

    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <CardImage card={card} />
        </View>
        {this.renderRow('name', card.name)}
        {this.renderRow('type', card.type)}
        {this.renderRow('P/T', `${card.power}/${card.toughness}`)}
        {this.renderRow('manaCost', `${card.manaCost} (${card.cmc})`)}
        {this.renderRow('rarity', card.rarity)}
        {this.renderRow('text', card.text)}
        {this.renderRow('flavor', card.flavor)}
        {this.renderRulings(card.rulings)}
        {this.renderRow('sets', 'Estou com preguiça')}
        {this.renderRow('legality', 'Farei depois')}
        {this.renderRow('foreignNames', 'Um dia')}
        <View style={styles.card} />
      </ScrollView>
    )
  }
}

CardDetails.propTypes = {
  card: cardType
}
