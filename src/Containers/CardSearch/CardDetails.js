/* @flow */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Metrics } from '../../Styles/Themes'
import { CardImage } from '../Components'
import { cardType } from '../../Types/CardType'
import Swiper from 'react-native-swiper'

export default class CardDetails extends Component {
  render () {
    /*return (
      <View style={styles.container}>

      </View>
    )*/
    return (
      <Swiper style={styles.container} showsButtons>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.container}>
          <CardImage card={this.props.card} />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

CardDetails.propTypes = {
  card: cardType
}
