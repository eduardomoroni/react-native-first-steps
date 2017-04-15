/* @flow */

import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../Styles/ListCardStyles'
// import Card from './Card'
import { CardImage } from '../Components'

type ListCardsProps = {
  cards: any
}

const renderRow = (rowData, sectionID, rowID) => {
  return (
    <View style={styles.row} >
      <CardImage card={{...rowData}} key={rowID} />
    </View>
  )
}

let dataSource = {}
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

class ListCards extends Component {
  props: ListCardsProps

  constructor (props) {
    super(props)
    dataSource = ds.cloneWithRows(props.cards)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.cards !== nextProps.cards) {
      dataSource = ds.cloneWithRows(nextProps.cards)
    }
  }

  render () {
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        dataSource={dataSource}
        renderRow={renderRow}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { cards } = state.cardSearch
  return {
    cards: cards
  }
}

export default connect(mapStateToProps)(ListCards)
