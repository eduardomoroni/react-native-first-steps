import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Styles/Themes'
import Card from './Components/Card'

type ListCardsProps = {
  cards: any
}

const renderRow = (card) => {
  return <Card card={{...card}} /> // IS THAT BREAKS REALM LAZY LOADING?
}

let dataSource = {}

class ListCards extends Component {
  props: ListCardsProps

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    dataSource = ds.cloneWithRows(props.cardsTest) // FOR TEST PORPOUSE ONLY
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.silver
  }
})

const mapStateToProps = (state) => {
  const { cards } = state.cardSearch
  return {
    cards: cards
  }
}

export default connect(mapStateToProps)(ListCards)
