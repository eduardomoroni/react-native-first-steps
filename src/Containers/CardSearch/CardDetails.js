/* @flow */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Metrics } from '../../Styles/Themes'
import { CardImage } from '../Components'
import { cardType } from '../../Types/CardType'

export default class CardDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <CardImage card={this.props.card} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  }
})

CardDetails.propTypes = {
  card: cardType
}
