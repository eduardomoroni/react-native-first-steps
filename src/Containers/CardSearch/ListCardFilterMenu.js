// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, BackAndroid } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { sortCards as sortCardsActionCreator } from '../../Redux/Actions'
import {
  DropdownInputForm,
  SwitchInputForm
} from '../Components'

class ListCardFilterMenu extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.context.drawer.toggle()
        return true
      }
      return false
    })
  }

  componentWillReceiveProps (nextProps) {
    const {
      sortBy,
      sortCards,
      sortReverseOrder
    } = nextProps

    if (this.props.sortBy !== sortBy || this.props.sortReverseOrder !== sortReverseOrder) {
      sortCards({field: sortBy, reversed: sortReverseOrder})
    }
  }

  render () {
    const { showCardsAs, sortBy } = this.props
    const showCardsValues = ['list', 'image']
    const sortValues = ['cmc', 'multiverseid', 'name', 'number', 'rarity', 'type', 'power', 'toughness']

    return (
      <View style={styles.container}>
        <Field name='showCardsAs' component={DropdownInputForm} dropdownItems={showCardsValues} selectedValue={showCardsAs} />
        <Field name='showCardText' component={SwitchInputForm} />
        <Field name='sortReverseOrder' component={SwitchInputForm} />
        <Field name='sortBy' component={DropdownInputForm} dropdownItems={sortValues} selectedValue={sortBy} />
      </View>
    )
  }
}

ListCardFilterMenu.contextTypes = {
  drawer: PropTypes.object
}

ListCardFilterMenu.propTypes = {
  showCardText: PropTypes.bool,
  sortBy: PropTypes.string,
  sortReverseOrder: PropTypes.bool,
  toggleCardText: PropTypes.func,
  sortCards: PropTypes.func
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    initialValues: {
      showCardText: true,
      sortBy: state.cardSearch.sortBy.field,
      sortReverseOrder: state.cardSearch.sortBy.reversed
    },
    showCardText: selector(state, 'showCardText'),
    showCardsAs: selector(state, 'showCardsAs'),
    sortBy: selector(state, 'sortBy'),
    sortReverseOrder: selector(state, 'sortReverseOrder')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortCards: (sortParams) => dispatch(sortCardsActionCreator(sortParams))
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20
  },
  switchStyle: {
    marginBottom: 10
  },
  rowStyle: {
    height: 40
  }
}

const ListCardFilterDecorated = reduxForm({form: 'CardSearchFilter', destroyOnUnmount: false}, mapStateToProps)(ListCardFilterMenu)
export default connect(mapStateToProps, mapDispatchToProps)(ListCardFilterDecorated)
