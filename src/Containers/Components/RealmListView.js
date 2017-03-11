import React, { Component } from 'react'
import { ListView } from 'realm/react-native'
import { inheritanceToArray } from '../../Realm/Conversion/Realm-utils'
import { Text } from 'react-native'

type RealmListViewProps = {
  realmResult: any
}

export class RealmListView extends Component {
  props: RealmListViewProps

  constructor (props: RealmListViewProps) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(inheritanceToArray(props.realmResult))
    }
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }
}
