// @flow

import React, { Component } from 'react'
import { View, BackAndroid, Switch, Text, Picker } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { toggleShowCardText, sortCards as sortCardsActionCreator } from '../../Redux/Actions'
import I18n from 'react-native-i18n'

const renderSwitch = (fieldProps) => {
  const { input, isEnabled } = fieldProps
  const { onChange, name } = input

  return (
    <View style={styles.rowStyle}>
      <Text>{I18n.t(name)}</Text>
      <Switch style={styles.switchStyle} value={isEnabled} onValueChange={onChange} />
    </View>
  )
}

const renderSortInput = (fieldProps) => {
  const { onChange, name, value } = fieldProps.input

  const sortValues = ['cmc', 'multiverseid', 'name', 'number', 'rarity', 'type', 'power', 'toughness']

  const renderPickerItem = (value, key) => {
    return <Picker.Item label={value} value={value} key={key} />
  }

  return (
    <View style={styles.rowStyle}>
      <Text>{I18n.t(name)}</Text>
      <Picker
        selectedValue={value.field}
        onValueChange={onChange}>
        { sortValues.map(renderPickerItem) }
      </Picker>
    </View>
  )
}

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
    const { showCardText, sortReverseOrder } = this.props
    return (
      <View style={styles.container}>
        <Field name='showCardText' component={renderSwitch} isEnabled={showCardText} />
        <Field name='sortReverseOrder' component={renderSwitch} isEnabled={sortReverseOrder} />
        <Field name='sortBy' component={renderSortInput} />
      </View>
    )
  }
}

ListCardFilterMenu.contextTypes = {
  drawer: React.PropTypes.object
}

ListCardFilterMenu.propTypes = {
  showCardText: React.PropTypes.bool,
  sortBy: React.PropTypes.string,
  sortReverseOrder: React.PropTypes.bool,
  toggleCardText: React.PropTypes.func,
  sortCards: React.PropTypes.func
}

Field.propTypes = {
  isEnabled: React.PropTypes.bool
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
    sortBy: selector(state, 'sortBy'),
    sortReverseOrder: selector(state, 'sortReverseOrder')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCardText: (filter) => dispatch(toggleShowCardText(filter)),
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

const ListCardFilterDecorated = reduxForm({form: 'CardSearchFilter'}, mapStateToProps)(ListCardFilterMenu)
export default connect(mapStateToProps, mapDispatchToProps)(ListCardFilterDecorated)
