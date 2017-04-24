import React, { Component } from 'react'
import { ListView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { formValueSelector } from 'redux-form'
import styles from '../../Styles/ListCardStyles'
import { Card } from './Card'
import { CardImage } from '../Components'

type ListCardsProps = {
  cards: any,
  showCardsAs: any // TODO: This is a enum
}

// TODO: Refactor Types, enable flow
const showDetails = (card) => {
  NavigationActions.cardDetails({card: card, title: card.name})
}

let dataSource = {}
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

export class ListCards extends Component {
  props: ListCardsProps

  constructor (props: ListCardsProps) {
    super(props)
    dataSource = ds.cloneWithRows(props.cards)
  }

  componentWillReceiveProps (nextProps: ListCardsProps) {
    if (this.props.cards !== nextProps.cards) {
      dataSource = ds.cloneWithRows(nextProps.cards)
    }
  }

  isDisplayingAsImage () {
    return this.props.showCardsAs === 'image'
  }

  renderRow = (rowData: any, sectionID: number, rowID: number) => {
    return (
      <TouchableOpacity
        onPress={() => showDetails(rowData)}
        style={this.isDisplayingAsImage() ? styles.card : {}} >
        {this.isDisplayingAsImage() ? <CardImage card={{...rowData}} key={rowID} /> : <Card card={{...rowData}} key={rowID} showCardText={this.props.showCardText} />}
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
  const selector = formValueSelector('CardSearchFilter')

  return {
    cards,
    showCardsAs,
    showCardText: selector(state, 'showCardText')
  }
}

export default connect(mapStateToProps)(ListCards)
