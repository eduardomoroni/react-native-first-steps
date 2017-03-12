/* @flow */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'
import {
  Metrics
} from '../Styles/Themes'

type CardDetailsProps = {
  card: any
}

export default class CardDetails extends Component {
  props: CardDetailsProps

  render () {
    const {
      multiverseid
    } = this.props.card
    const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: IMG_URL}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  image: {
    flex: 1
  }
})
