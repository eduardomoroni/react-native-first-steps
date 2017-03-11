import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import Card from './Components/Card'

type ListCardsProps = {
  cards: any
}

const renderRow = (card) => {
  return <Card card={{...card}} />
}

let dataSource = {}

class ListCards extends Component {
  props: ListCardsProps

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    dataSource = ds.cloneWithRows(props.cards)
  }

  render () {
    return (
      <View style={{flex: 1, paddingTop: 62}}>
        <ListView
          dataSource={dataSource}
          renderRow={renderRow}
        />
      </View>
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
