/* @flow */

import React, { Component } from 'react'
import { ListView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from '../../Styles/ListCardStyles'
import Card from './Card'
import { CardImage } from '../Components'

type ListCardsProps = {
  cards: any,
  showCardsAs: any // TODO: This is a enum
}

const showDetails = (card) => {
  NavigationActions.cardDetails({card: card, title: card.name})
}

let dataSource = {}
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

class ListCards extends Component {
  props: ListCardsProps

  constructor (props) {
    super(props)
    dataSource = ds.cloneWithRows(props.cards)
    // dataSource = ds.cloneWithRows(props.cardsTest)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.cards !== nextProps.cards) {
      dataSource = ds.cloneWithRows(nextProps.cards)
    }
  }

  isDisplayingAsImage () {
    return this.props.showCardsAs === 'image'
  }

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <TouchableOpacity
        onPress={() => showDetails(rowData)}
        style={this.isDisplayingAsImage() ? styles.card : {}} >
        {this.isDisplayingAsImage() ? <CardImage card={{...rowData}} key={rowID} /> : <Card card={{...rowData}} key={rowID} />}
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <ListView
        key={this.props.showCardsAs}
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
  const { cards, showCardsAs } = state.cardSearch

  return {
    cards,
    showCardsAs
  }
}

export default connect(mapStateToProps)(ListCards)
