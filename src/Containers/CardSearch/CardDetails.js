/* @flow */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Metrics } from '../../Styles/Themes'
import { CardImage } from '../Components'

type CardDetailsProps = {
  card: any
}

export default class CardDetails extends Component {
  props: CardDetailsProps

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
