// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, BackAndroid } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { toggleShowCardText, sortCards as sortCardsActionCreator, changeDisplayCards } from '../../Redux/Actions'
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

  // FIXME: Why Am I doing this?
  componentWillReceiveProps (nextProps) {
    const {
      showCardText,
      toggleCardText,
      sortBy,
      sortCards,
      sortReverseOrder
    } = nextProps

    if (this.props.showCardText !== showCardText) {
      toggleCardText({showCardText: showCardText})
    }

    if (this.props.sortBy !== sortBy || this.props.sortReverseOrder !== sortReverseOrder) {
      sortCards({field: sortBy, reversed: sortReverseOrder})
    }
  }

  render () {
    const { showCardText, sortReverseOrder, showCardsAs, sortBy } = this.props
    const showCardsValues = ['list', 'image']
    const sortValues = ['cmc', 'multiverseid', 'name', 'number', 'rarity', 'type', 'power', 'toughness']

    return (
      <View style={styles.container}>
        <Field name='showCardsAs' component={DropdownInputForm} dropdownItems={showCardsValues} selectedValue={showCardsAs} />
        <Field name='showCardText' component={SwitchInputForm} isEnabled={showCardText} />
        <Field name='sortReverseOrder' component={SwitchInputForm} isEnabled={sortReverseOrder} />
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

Field.propTypes = {
  isEnabled: PropTypes.bool
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    initialValues: {
      showCardText: state.cardSearch.showCardText,
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
    toggleCardText: (filter) => dispatch(toggleShowCardText(filter)),
    sortCards: (sortParams) => dispatch(sortCardsActionCreator(sortParams)),
    changeDisplayCards: (showAs) => dispatch(changeDisplayCards(showAs))
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
