// @flow

import React, { Component } from 'react'
import { View, BackAndroid, Switch, Text } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { toggleShowCardText } from '../Redux/Actions'
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
    // create type
    const { showCardText, updateFilter } = nextProps
    if (this.props.showCardText !== showCardText) {
      updateFilter({showCardText: showCardText})
    }
  }

  render () {
    const { showCardText } = this.props
    return (
      <View style={styles.container}>
        <Field name='showCardText' component={renderSwitch} isEnabled={showCardText} />
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
  updateFilter: React.PropTypes.func
}

Field.propTypes = {
  isEnabled: React.PropTypes.bool
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchFilter')

  return {
    initialValues: {
      showCardText: state.cardSearch.showCardText
    },
    showCardText: selector(state, 'showCardText'),
    sortBy: selector(state, 'sortBy')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter) => dispatch(toggleShowCardText(filter))
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
