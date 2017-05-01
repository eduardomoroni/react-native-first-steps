import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'

import {
  List,
  ListItem,
  Text
} from 'react-native-elements'

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Passwords',
    icon: 'fingerprint'
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline'
  },
  {
    title: 'Updates',
    icon: 'track-changes'
  }
]

export class Settings extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(list1)
    }
    this.renderRow = this.renderRow.bind(this)
  }
  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    )
  }
  render () {
    return (
      <ScrollView keyboardShouldPersistTaps='always' style={styles.mainContainer}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
            />
        </List>
        <List>
          <ListItem
            roundAvatar
            title='Limited supply! Its like digital gold!'
            subtitle={
              <View style={styles.subtitleView}>
                <Image source={require('../../Assets/Images/rating.png')} style={styles.ratingImage} />
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            }
            avatar={require('../../Assets/Images/avatar1.jpg')}
          />
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  container: {
    marginTop: 60
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#69DDFF'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default Settings
