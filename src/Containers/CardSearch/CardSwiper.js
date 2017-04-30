import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import CardDetails from './CardDetails'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { cardType } from '../../Types/CardType'
import { findCardIndex } from '../../Services/CardService'
import Swiper from 'react-native-swiper'
import { FloatingActionButton } from '../Components'

export class CardSwiper extends Component {
  renderCardDetails (card, key) {
    return (
      <CardDetails card={card} key={key} />
    )
  }

  updateScreenTitle (e, state) {
    const { index } = state
    const getCardName = (index) => this.children[index].props.card.name
    NavigationActions.refresh({title: `${getCardName(index)}`})
  }

  render () {
    const { cards, card } = this.props
    let { index } = this.props

    if (card !== null) {
      index = findCardIndex(cards, card)
    }

    return (
      <View>
        <Swiper
          ref={(component) => { this.swiper = component }}
          onMomentumScrollEnd={this.updateScreenTitle}
          style={{ flex: 1 }}
          loadMinimal
          loadMinimalSize={2}
          loop={false}
          showsPagination={false}
          index={index}
          >
          {cards.map(this.renderCardDetails)}
        </Swiper>
        <FloatingActionButton />
      </View>
    )
  }
}

CardSwiper.propTypes = {
  cards: PropTypes.objectOf(cardType),
  card: cardType,
  index: PropTypes.number
}

CardSwiper.defaultProps = {
  index: 0,
  card: null
}

export default CardSwiper
