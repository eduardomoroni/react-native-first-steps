import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Styles/ListCardStyles'
import Card from './Components/Card'

type ListCardsProps = {
  cards: any
}

const renderRow = (card) => {
  return <Card card={{...card}} />
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
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={renderRow}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
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
