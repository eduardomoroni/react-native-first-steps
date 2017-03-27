import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { realm } from '../Config/Realm'
import { inheritanceToArray } from '../Realm/Conversion/Realm-utils'
import { Metrics } from '../Styles/Themes'
import { searchForCards } from '../Redux/Actions'
import TextInputForm from './Components/TextInputForm'
import DropdownInputForm from './Components/DropdownInputForm'
import SubmitButtonForm from './Components/SubmitButtonForm'
import ManaIconsBar from './Components/ManaIconsBar'

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard
} from 'react-native'

type CardSearchFormProps = {
  cardTypes: any,
  cardSubTypes: any,
  cardType: string,
  cardSubType: string,
  searchCards: () => void,
  handleSubmit: any
}

const selector = formValueSelector('CardSearchForm')

let CardSearchForm = (props: CardSearchFormProps) => {
  const {
    handleSubmit,
    cardTypes,
    cardSubTypes,
    searchCards
  } = props

  const {
    cardType,
    cardSubType
  } = props

  const submit = values => {
    Keyboard.dismiss()
    searchCards(values)
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Field name='cardName' component={TextInputForm} />
        { renderTwoFieldInRow(
          <Field name='cardType' component={DropdownInputForm} dropdownItems={cardTypes} selectedValue={cardType} />,
          <Field name='cardSubType' component={DropdownInputForm} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
        )}
        <Field name='cardText' component={TextInputForm} />
        <ManaIconsBar />
      </View>
      <TouchableOpacity style={Styles.containerFooter} onPress={handleSubmit(submit)} >
        <SubmitButtonForm onPress={handleSubmit(submit)} />
      </TouchableOpacity>
    </View>
  )
}

const renderTwoFieldInRow = (leftField, rightField) => {
  return (
    <View style={Styles.twoFieldsPerLine}>
      <View style={Styles.leftField}>
        {leftField}
      </View>
      <View style={Styles.rightField}>
        {rightField}
      </View>
    </View>
  )
}

Field.propTypes = {
  dropdownItems: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedValue: React.PropTypes.string
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    marginHorizontal: Metrics.marginHorizontal,
    paddingTop: Metrics.navBarHeight + Metrics.smallMargin
  },
  containerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  twoFieldsPerLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftField: {
    flex: 1,
    justifyContent: 'flex-start',
    marginRight: Metrics.smallMargin / 2
  },
  rightField: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: Metrics.smallMargin / 2
  }
})

const mapStateToProps = (state) => {
  const cardTypes = inheritanceToArray(realm.objects('Type').snapshot())
  const cardSubtypes = inheritanceToArray(realm.objects('SubType').snapshot())

  cardTypes.unshift('')
  cardSubtypes.unshift('')

  return {
    cardTypes: cardTypes,
    cardSubTypes: cardSubtypes,
    cardName: selector(state, 'cardName'),
    cardType: selector(state, 'cardType'),
    cardSubType: selector(state, 'cardSubType'),
    cardText: selector(state, 'cardText')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCards: (cardSearchForm) => dispatch(searchForCards(cardSearchForm))
  }
}

CardSearchForm = reduxForm({form: 'CardSearchForm'})(CardSearchForm)
export default connect(mapStateToProps, mapDispatchToProps)(CardSearchForm)
