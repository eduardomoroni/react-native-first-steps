/* @flow */

import React, { Component } from 'react'
import { ListView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from '../../Styles/ListCardStyles'
import { Card } from './Card'
import { CardImage } from '../Components'
import { cardType } from '../../Types/CardType'

const showDetails = (card: cardType) => {
  NavigationActions.cardDetails({card: card, title: card.name})
}

let dataSource = {}
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

export class ListCards extends Component {
  constructor (props: any) {
    super(props)
    dataSource = ds.cloneWithRows(props.cards)
  }

  componentWillReceiveProps (nextProps: any) {
    if (this.props.cards !== nextProps.cards) {
      dataSource = ds.cloneWithRows(nextProps.cards)
    }
  }

  isDisplayingAsImage () {
    return this.props.showCardsAs === 'image'
  }

  renderRow = (rowData: cardType, sectionID: number, rowID: number) => {
    const { showCardText } = this.props

    return (
      <TouchableOpacity
        onPress={() => showDetails(rowData)}
        style={this.isDisplayingAsImage() ? styles.card : {}} >
        {this.isDisplayingAsImage() ? <CardImage card={{...rowData}} key={rowID} /> : <Card card={{...rowData}} key={rowID} showCardText={showCardText} />}
      </TouchableOpacity>
    )
  }

  render () {
    const {
      showCardsAs,
      showCardText
    } = this.props

    return (
      <ListView
        key={showCardsAs + showCardText}
        style={styles.container}
        contentContainerStyle={this.isDisplayingAsImage() ? styles.contentContainer : {}}
        renderRow={this.renderRow}
        dataSource={dataSource}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { cards, showCardsAs, showCardText } = state.cardSearch
  console.log('showCardText', showCardText)
  return {
    cards,
    showCardsAs,
    showCardText
  }
}

ListCards.propTypes = {
  cards: PropTypes.objectOf(cardType),
  showCardsAs: PropTypes.oneOf(['list', 'image'])
}

export default connect(mapStateToProps)(ListCards)
