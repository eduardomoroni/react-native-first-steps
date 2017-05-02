import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { Metrics, Colors } from '../../Styles/Themes'
import { Tabs, Tab, Icon } from 'react-native-elements'
import ListCards from '../CardSearch/ListCards'
import { AddToModal } from '../Components'
import WishListService from '../../Services/WishListService'

// TODO: REMOVE, JUST FOR TESTS
import * as RealmService from '../../Realm/RealmService'

export class WishList extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'want'
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render () {
    const testCard = RealmService.objectForPrimaryKey('Card', 'd6901a23503f4953dc3f643b193a7bdb31478fc2')
    const wishList = WishListService.getUserWishList(this.props.userID)
    const { want, have } = wishList
    const { selectedTab } = this.state

    return (
      <Tabs>
        <Tab
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.selected}
          selected={selectedTab === 'want'}
          title={selectedTab === 'want' ? 'WANT' : null}
          renderIcon={() => <Icon containerStyle={styles.icon} color={Colors.gray} name='plus-one' size={33} />}
          renderSelectedIcon={() => <Icon color={Colors.lightblue} name='plus-one' size={30} />}
          onPress={() => this.changeTab('want')}>
          {/* <ListCards cards={want} /> */}
          <AddToModal list={want} card={testCard} />
        </Tab>
        <Tab
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.selected}
          selected={selectedTab === 'have'}
          title={selectedTab === 'have' ? 'HAVE' : null}
          renderIcon={() => <Icon containerStyle={styles.icon} color={Colors.gray} name='beenhere' size={33} />}
          renderSelectedIcon={() => <Icon color={Colors.lightblue} name='beenhere' size={30} />}
          onPress={() => this.changeTab('have')}>
          <ListCards cards={have} />
        </Tab>
      </Tabs>
    )
  }
}

WishList.propTypes = {
  foo: PropTypes.any
}

WishList.defaultProps = {
  foo: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  selected: {
    marginTop: -1,
    marginBottom: 6
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 10
  }
})

const mapStateToProps = (state) => {
  const { userID } = state.user
  return {
    userID
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
