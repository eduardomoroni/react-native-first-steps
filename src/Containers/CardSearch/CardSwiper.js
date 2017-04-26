import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import CardDetails from './CardDetails'
import { cardType } from '../../Types/CardType'
import Swiper from 'react-native-swiper'

class CardSwiper extends Component {
  renderCardDetails (card, key) {
    return (
      <CardDetails card={card} key={key} />
    )
  }

  render () {
    const { cards } = this.props
    return (
      <Swiper
        style={styles.wrapper}
        loadMinimal
        loadMinimalSize={1}
        loop={false}
        showsPagination={false}
        >
        {cards.map(this.renderCardDetails)}
      </Swiper>
    )
  }
}

CardSwiper.propTypes = {
  cards: PropTypes.objectOf(cardType)
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default CardSwiper
