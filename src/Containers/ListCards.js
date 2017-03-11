import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'
import { connect } from 'react-redux'

class ListCards extends Component {
  constructor (props) {
    super(props)
    const { cards } = props
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(cards.map((value) => { return value.name }))
    }
  }

  render () {
    return (
      <View style={{flex: 1, paddingTop: 62}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
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
